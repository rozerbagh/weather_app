// Base url
// http://api.weatherstack.com/current?access_key=a3f72ac1aadbb82b56d2609d1bb34ddb&query=lat,long
require('dotenv').config();
const request = require('request');

const url = process.env.WEATHERSTACK_API_KEY;
const API_KEY = process.env.WEATHERSTACK_BASE_API;

const forecast = (latlong, callback) => {
    request({ url: `${url}/current?access_key=${API_KEY}&query=${latlong.latitude},${latlong.longitude}`, json: true }, (err, res) => {
        const body = JSON.parse(res.body);
        if (error) {
            throw error;
        }
        const geodata = {
            longitude: response.body.features[0].geometry.coordinates[0],// longitude
            latitude: response.body.features[0].geometry.coordinates[1],// latitude
        }
        callback(geodata)
    });
}
// console.log(`Current temperature in ${response.body.location.name} is ${response.body.current.temperature}℃`);
module.exports = forecast;
