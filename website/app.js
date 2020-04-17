/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=';
let apiKey = '&appid=8b44aa9e42a55dba93a6118d79cd1470';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Listening for the user to make an input at the page

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
  const newZip = document.getElementById('zip').value;
  const user = document.getElementById('feelings').value;

  getWeather(baseURL, newZip, apiKey)
    .then(function (data) {
      postData('/addEntry', {
        date: newDate,
        temperature: data.main.temp,
        user: user,
      });
      updateUI()
    });
}

/* GET request to App API Endpoint and update of UI */

const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const allData = await request.json();
    document.getElementById('date').innerHTML = 'Date: ' + allData.date;
    document.getElementById('temp').innerHTML = 'Temperature: ' + allData.temp;
    document.getElementById('content').innerHTML = 'Note: ' + allData.user;
  } catch (error) {
    console.log("error", error);
  }
};
/* GET request to API */

const getWeather = async (baseURL, zip, key) => {
  const res = await fetch(baseURL + zip + key);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

/*POST request */

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
  } catch (error) {
    console.log("error", error);
  }
}
