// App API Endpoint 
const projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 3000;
/* Spin up the server */
const server = app.listen(port, listening);

function listening() {
  console.log('server running');
  console.log(`running on localhost: ${port}`);
};

//GET route 

app.get('/all', sendAllData);
function sendAllData(req, res) {
  res.send(projectData);
  console.log(projectData, 'all-sent');
  //projectData.splice(0, 1); // cleaning the array for next request
} 

// POST route 

app.post('/addEntry', addEntry);

function addEntry(req, res) {
  console.log(req.body, 'addEntry POST came');
  projectData.date = req.body.date;
  projectData.temp = req.body.temperature;
  projectData.user = req.body.user;
  res.send(projectData);
  console.log(projectData, 'new entry was pushed')
};

