function sendMessage() {
  var userInput = document.getElementById("userInput");
  var chatbox = document.getElementById("chatbox");
  
  
  var userMessage = document.createElement("p");
  userMessage.innerHTML = "<strong>Du:</strong> " + userInput.value;
  chatbox.appendChild(userMessage);
  
  
  var botMessage = document.createElement("p");
  botMessage.innerHTML = "<strong>Chatbot:</strong> Das ist die Antwort des Chatbots.";
  chatbox.appendChild(botMessage);
  
  
  userInput.value = "";
  
 
  chatbox.scrollTop = chatbox.scrollHeight;
}
