package discord;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class Rasa {

	public static String interact(String userInput) {

		String answer = "Error";

		try {

			URL url = new URL("http://localhost:5005/webhooks/rest/webhook");
			HttpURLConnection connection = (HttpURLConnection) url.openConnection();
			connection.setRequestMethod("POST");
			connection.setRequestProperty("Content-Type", "application/json");
			connection.setDoOutput(true);

			String jsonInputString = "{\"message\":\"" + userInput + "\"}";

			try (OutputStream outputStream = connection.getOutputStream()) {
				byte[] input = jsonInputString.getBytes("utf-8");
				outputStream.write(input, 0, input.length);
			}

			StringBuilder response = new StringBuilder();
			try (BufferedReader bufferedReader = new BufferedReader(
					new InputStreamReader(connection.getInputStream(), "utf-8"))) {
				String line;
				while ((line = bufferedReader.readLine()) != null) {
					response.append(line.trim());
				}
			}

			answer = response.toString();
		//	System.out.println(response.toString());

			connection.disconnect();

			answer = response.toString();

			JSONParser parser = new JSONParser();
			JSONArray jsonArray = (JSONArray) parser.parse(answer);

			JSONObject jsonObject = (JSONObject) jsonArray.get(0);

			answer = (String) jsonObject.get("text");

			return answer;

		}

		catch (Exception exc) {

		}

		return answer;

	}

}
