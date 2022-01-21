const axios = require('axios');
require('dotenv').config();
const request = require('request');
const mapurl = process.env.MAPBOX_BASE_API;
const mapBoxToken = process.env.MAPBOX_API_KEY;

/**
 * 
 * @param {*} address the name of the place for mapbox api fecthing request
 * @param {*} callback the callback function that will take the geocoding data and perform some actions
 */
const geocode = (address, callback) => {
    const url = `${mapurl}/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapBoxToken}`
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            throw error;
        }
        const geodata = {
            longitude: response.body.features[0].geometry.coordinates[0],// longitude
            latitude: response.body.features[0].geometry.coordinates[1],// latitude
            details: response.body,
        }
        callback(error, geodata)
    });
}

module.exports = geocode;