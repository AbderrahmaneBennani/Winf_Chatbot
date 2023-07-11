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
      })
      .catch((error) => console.error(error));
  }
});