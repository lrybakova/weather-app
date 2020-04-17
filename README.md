# Weather Journal App

## Table of Contents

- HTML file - static version of App homepage
- CSS file - styles
- JS files - combo of app.js (client side) and server.js (server side) scripts for dynamic data retrieval and UI update.
- JSON file - package 
- Node modules used 
- Readme file 

## Description

The project is an example of adaptive web-page with dynamically updated content, based on User input and external API data. When user inputs zip (country is set to US by default) and his Note at the page, client side code makes a request to OpenMapWeather API and sends data from API and user input to server side code, where it is being combined and displayed to user in the section “Most recent Entry”. Functionality works and looks good both on PC and mobile screens. Done without any frameworks.

## Project specification check (V1)

* Project Environment Setup

  Node and Express Environment:
   - Node and Express are installed
   - Express app instance pointed to ‘website’ folder with .html, .css, and .js files.

  Project dependencies:
    - ‘cors’ package is installed, in server.js file it is required and app instance set up to use (cars)
    - body parser installed and included

  Local server:
    - Local server is running and producing feedback to the command line
  
 API credentials:
    - Created on OpenWeatherMap.com

* APIs and Routes
  APP API Endpoint:
    - In the file server.js is the file projectData, which acts as app API endpoint
    
  Integrating OpenWeatherMap API:
    - Personal API Key is saved in a named const variable
    - API Key variable is passed as a parameter to fetch()
    - Data is successfully returned from external API

  Return Endpoint Data (GET Route I Server Side):
    - In the server side a route is created, which takes in as an argument a string naming the route (/all)
    - It returns JS object created at the top of server code Return Endpoint 

  Data (GET Route II: Client Side): 
    - There is an asynchronous function to fetch the data from the app endpoint (Update UI())

  Post route:
    - I am able to add an entry to the project end point using a POST route setup on the server side (executed on a client side via function postData.
    - Function postData takes two arguments: url to make a POST to and Object holding data to POST
  - Server side function creates a new entry in JS object projectData, consisting of Data received from the client side POST

* Dynamic UI

  Naming HTML Inputs and Buttons for Interaction:
    - The input element with the placeholder property set to “enter zip code here” has an id of zip
    - The textarea included in project HTML has an id of feelings
    - The button included in project HTML has an id of generate
  Assigning Element Properties Dynamically:
    - The div with the id, entryHolder has three child divs with the ids:
  • date
  • temp
  • content
  Event listeners:
    - Event listener added to an existing HTML button from DOM using VanillaJS
    - In the app.js the element with the id of generate has an addEventListener() method called on it, with click as the first parameter, and a named callback function performAction as the second parameter.

  Dynamically update UI:
    - Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript
    - Included in the async function updateUI to retrieve that app’s data on the client side, existing DOM have their innerHTML properties dynamically set according to data returned by the app route.
