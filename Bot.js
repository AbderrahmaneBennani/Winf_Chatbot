gapi.load('client', start);

function start() {
  gapi.client.init({
    apiKey: 'AIzaSyA_6jYuYTtLboN0UCT8n-_RKjKAx_BdBYw',
    clientId: '653107115819-5a0vj8lm2k67g5htqrat27onrt7vi4rk.apps.googleusercontent.com',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    scope: 'https://www.googleapis.com/auth/spreadsheets'
  })
}

const responseElement = document.getElementById("response");
const userInputElement = document.getElementById("userInput")

userInputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const userInput = userInputElement.value;
    userInputElement.value = ""
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
        responseElement.value += "Bot: " + botResponse + "\n" + "\n";
        responseElement.scrollTop = responseElement.scrollHeight;
        console.log("Bot:", botResponse);
        saveTextToSpreadsheet(userInput);
      })
      .catch((error) => console.error(error));
  }
});

function saveTextToSpreadsheet(text) {
    var accessToken = 'ya29.a0AbVbY6McCYXu2Ca4gB0dU6-dLM7M70RX9pJirF4rdumz9OaOSkDDnfa3kTD6IF9GFZSaDWZ_CuOOp1FwTyzHu3Dc_yRVleLsySKl0FHzy_Ep_nOzuFdBe-7Y_h1hrw4m1pMmlLGNBSBpx09S6KTydX9aMnC6aCgYKAUgSARMSFQFWKvPlNwEyz1BIqr-SJKkU8m6ugw0163';
  
    var params = {
      spreadsheetId: '1jukwoIbJOT1jIrDEdF_QKzPWDqKC5RB4aFE2D039eHQ',
      range: 'Sheet1!A1',
      valueInputOption: 'RAW',
      resource: {
        values: [[text]]
      },
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    };
  
    gapi.client.sheets.spreadsheets.values.update(params)
      .then(function (response) {
        console.log('Text saved successfully.');
      })
      .catch(function (error) {
        console.error('Error saving text:', error);
      });
  }