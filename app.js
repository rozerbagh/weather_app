const express = require('express');
const request = require('request')
const app = express();
require('dotenv').config();
const geocode = require('./utils/geocode');
const search = require('./utils/search');
const api_key = process.env.WEATHERSTACK_API_KEY;
const base_url = process.env.WEATHERSTACK_BASE_API;
const port = process.env.PORT || 9000;


app.get('/', (req, res) => {
    res.send('<h1>Weather Report</h1>')
})
app.get('/:place', (req, res) => {
    const place = req.params.place;
    geocode(place, (error, { longitude, latitude, details } = {}) => {
        const url = `${base_url}/current?access_key=${api_key}&query=${latitude},${longitude}`;
        request({ url: url, json: true }, (error, response) => {
            res.send({
                longitude,
                latitude,
                details,
                weather_report: response.body
            })
        });
    });
})

app.listen(port, () => { })