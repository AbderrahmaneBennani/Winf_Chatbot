# Winf_Chatbot

## How to Install Rasa:

1. SEHR WICHTIG: Python muss 3.9.0 version sein. [(hier herunterladen)](https://www.python.org/downloads/release/python-390/)
2. Open CMD (Eingabeaufforderung)
3. Install rasa: pip install rasa
4. cd to folder where you want to install rasa
5. initialise rasa using: rasa init

## How to run Rasa with the FAU Chatbot Website:

1. Open CMD (Eingabeaufforderung) and cd to the Folder of Rasa. Ex: cd C:\Users\Revox\Desktop\Winf_Chatbot\Winf_Chatbot\Rasa
2. Run Rasa Webserver using: rasa run -m models --enable-api --cors "*"
3. Open Html file in "../xampp/htdocs/myWebsite.html"

## How to run Rasa in shell:

1. Open CMD (Eingabeaufforderung) and cd to the Folder of Rasa. Ex: cd C:\Users\Revox\Desktop\Winf_Chatbot\Winf_Chatbot\Rasa
2. enter: rasa shell
