const express = require('express');
const app = express();
require('dotenv').config();
const geocode = require('./utils/geocode');
const search = require('./utils/search');
const api_key = process.env.WEATHERSTACK_API_KEY;
const base_url = process.env.WEATHERSTACK_BASE_API;

geocode('bargarh', (error, { longitude, latitude }) => {
    console.log(longitude, latitude);
    const url = `${base_url}/current?access_key=${api_key}&query=${geodata.latitude},${geodata.longitude}`;
    // request({ url: url, json: true }, (error, response) => {
    //     console.log(response.body)
    // });
});