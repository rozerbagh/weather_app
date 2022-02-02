# GPS-tracker-using-Neo-6m-Module--ESP8266--nodejs--mongodb
Build a GPS tracker using Neo 6m Module, ESP8266, nodejs, mongodb and EJS 
Hey Everyone, I hope you guys are safe and sound. In this tutorial we are going to “ Build a GPS tracker using Neo 6m Module, ESP8266, nodejs, mongodb and EJS ”.

#### You will need below components for this tutorial:
1.	Neo 6m GPS module
2.	Wemos d1 mini
3.	Micro USB cable
4.	One to one connectors

#### Here are the installation links which are mentioned in the video:
1.  Arduino
    * Downlad - https://www.arduino.cc/en/main/software
2.	ESP8266 Libraries
    * Download - https://arduino.esp8266.com/stable/package_esp8266com_index.json
    * Install Library
3.	Arduino Json and HTTP client library installation and version
    * Install Library
4.	Google Maps API Key
    * How to get google maps api key - https://developers.google.com/maps/documentation/embed/get-api-key
5.	Nodejs & NPM
    * Download - https://nodejs.org/en/download/
    * Add to path
    * Command to run program – npm start
    * Exiting the nodejs – Ctrl + C
    * Install libraries – npm install
6.	Mongodb
    * Download - https://www.mongodb.com/try/download/community
    * Create DB folder in c - > data - > db
7.	Ngrok 
    * Download - https://ngrok.com/download
    * Add to path
    * Command to start ngrok – http ngrok <port_number> (Ex : http ngrok 3000)
8.	VS code
    * Download - https://code.visualstudio.com/download
9.	Postman
    * Download - https://www.postman.com/downloads/


####  Steps to run the webserver code:
1.  Clone this repository either by downloading it or by using git clone.
    ```
    git clone https://github.com/rozerbagh/weather_app
    ```
2.  Extract the folder and navigate inside the code
    ```
    CD Extracted_folder_name 
    ```
3.  Now, edit the map api in map.ejs in the views folder and paste your goole maps javascript api key.
    ```
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
    or
    src = refer mapbox.
    ```
4. Install the libraries
    ```
    npm install 
    ```
5. Install nodemon
    ```
    npm install nodemon
    ```
6. Start the server (Also make sure that your mongodb is running in the background)
    ```
    npm start
    ```
7. Your webserver is running on 3000 port
    ```
    localhost:3000
    ```
    

####  Steps to edit arduino code:
1.  You can find the code in the folder "arduino_code".
2.  Replace your SSID and Password with your wifi name and password
    ```
    #define STASSID "SSID"
    #define STAPSK  "PWD"
    ```
3.  Replace the ngrok url in the below lines
    ```
    const char* host = "YOUR_ngrok_url
    http.begin("YOUR_ngrok_url/addgpsdata");
    ```
4. Directly program your arduino board

