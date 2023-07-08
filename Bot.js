// Load the Google Sheets API
gapi.load("client", start);

function start() {
  gapi.client
    .init({
      apiKey: "AIzaSyA_6jYuYTtLboN0UCT8n-_RKjKAx_BdBYw", // My API Key
      clientId: "653107115819-5a0vj8lm2k67g5htqrat27onrt7vi4rk.apps.googleusercontent.com", // My client ID
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4",
      ],
      scope: "https://www.googleapis.com/auth/spreadsheets",
    })
    .then(function () {
      // Add an event listener to the Enter key press
      userInputElement.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          const userInput = userInputElement.value;
          userInputElement.value = "";

          axios
            .post(
              "https://chatbot-abderrahmanebennani.koyeb.app/webhooks/rest/webhook",
              {
                message: userInput,
              }
            )
            .then((response) => {
              const botResponse = response.data[0].text;
              responseElement.value += "Du: " + userInput + "\n";
              responseElement.value += "Bot: " + botResponse + "\n\n";
              responseElement.scrollTop = responseElement.scrollHeight;
              console.log("Bot:", botResponse);

              // Save the conversation to a Google Spreadsheet
              saveToSpreadsheet(userInput, botResponse);
            })
            .catch((error) => console.error(error));
        }
      });
    });
}

function saveToSpreadsheet(userInput, botResponse) {
  gapi.client.sheets.spreadsheets.values
    .append({
      spreadsheetId: "1jukwoIbJOT1jIrDEdF_QKzPWDqKC5RB4aFE2D039eHQ", // Add your spreadsheet ID here
      range: "Sheet1!A:B", // Specify the range where you want to append the conversation
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[userInput, botResponse]],
      },
    })
    .then(function (response) {
      console.log("Conversation saved to Google Spreadsheet");
    })
    .catch(function (error) {
      console.error(
        "Error saving conversation to Google Spreadsheet:",
        error
      );
    });
}