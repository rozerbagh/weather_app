const axios = require('axios');
const request = require('request');
const mapurl = 'https://api.mapbox.com';
const mapBoxToken = 'pk.eyJ1Ijoicm96ZXJiYWdoIiwiYSI6ImNrY3kxNG9qYjA1ZDUzMWw3anpuZjB5MHkifQ.vKatxynEU4-IxDSGpGGvaA'

const geocode = (address) => {
    const url = `${mapurl}/geocoding/v5/mapbox.places/${address}.json?access_token=${mapBoxToken}`
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            return "error"
        }
        console.log(response.body.features[0].geometry.coordinates[0]);// longitude
        console.log(response.body.features[0].geometry.coordinates[1]);// latitude
    });
    // axios.get(`${mapurl}/geocoding/v5/mapbox.places/${address}.json?access_token=${mapBoxToken}`)
    //     .then(res => {
    //         console.log(res.data)
    //     }).catch(err => {
    //         console.log(err)
    //     });
}

module.exports = geocode;