const request = require('request');
const geocode = require('./utils/geocode');
const api_key = 'a3f72ac1aadbb82b56d2609d1bb34ddb'
const base_url = `http://api.weatherstack.com`;
const url = `${base_url}/current?access_key=${api_key}&query=42.3605,-71.0596`;
// request({ url: url, json: true }, (error, response) => {
//     console.log(response.body)
// });
geocode('bargarh');