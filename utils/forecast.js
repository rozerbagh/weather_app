// Base url
// http://api.weatherstack.com/current?access_key=a3f72ac1aadbb82b56d2609d1bb34ddb&query=lat,long
const axios = require('axios');
const request = require('request');
const url = 'http://api.weatherstack.com/current';

const API_KEY = 'a3f72ac1aadbb82b56d2609d1bb34ddb';
request({ url: `${url}?access_key=${API_KEY}&query=21.2961,83.8245` }, (err, res) => {
    const body = JSON.parse(res.body);
    // console.log(body.current)
});


axios.get('http://api.weatherstack.com/current', { params })
    .then(response => {
        const apiResponse = response.data;
        console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    }).catch(error => {
        console.log(error);
    });
