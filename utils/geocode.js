const axios = require('axios');

const mapurl = 'https://api.mapbox.com';
const mapBoxToken = 'pk.eyJ1Ijoicm96ZXJiYWdoIiwiYSI6ImNrY3kxNG9qYjA1ZDUzMWw3anpuZjB5MHkifQ.vKatxynEU4-IxDSGpGGvaA'


// axios.get(`${mapurl}/v4/mapbox.mapbox-streets-v8/1/0/0.mvt?access_token=${mapBoxToken}`)
//     .then(res => {
//         console.log(res)
//     }).catch(err => {
//         console.log(err)
//     })

const geocode = (address) => {
    axios.get(`${mapurl}/geocoding/v5/mapbox.places/${address}.json?access_token=${mapBoxToken}`)
        .then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        });
}

module.exports = geocode;