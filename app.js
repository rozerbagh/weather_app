const express = require('express');
const request = require('request');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const geocode = require('./utils/geocode');
const search = require('./utils/search');
const api_key = process.env.WEATHERSTACK_API_KEY;
const base_url = process.env.WEATHERSTACK_BASE_API;
const port = process.env.PORT || 9000;


const app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(express.json());       // to support JSON-encoded bodies
const gpsdb = require('./database/latlongkeys').mongoURI;
const gpsdata = require("./database/gpsdata");
mongoose.connect(gpsdb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to Mongodb");
    })
    .catch((err) => {
        console.log(err);
    })
app.get('/', (req, res) => {
    res.send({ message: "Backend has been connected" });
});

app.post('/gpsdetails', (req, res) => {
    const { assetnumber, latitude, longitude } = req.body;
    res.send({ message: { assetnumber, latitude, longitude } });
    // let url = "http://13.126.20.121:5000";

    // request({ url: url, json: true }, (error, response) => {
    //     if (error) {
    //         throw error;
    //     }
    // });

});


app.post("/addgpsdata", (req, res) => {
    const { assetnumber, latitude, longitude } = req.body;
    let errors = [];
    console.log(assetnumber, latitude, longitude)
    if (!assetnumber || !latitude || !longitude) {
        errors.push({ msg: "Parameters are missing" });
    }
    if (errors.length > 0) {
        res.json({ Message: errors })
    } else {
        res.json({ message: "wehave reciced" })
        // const newgpsdata = new gpsdata({
        //     assetnumber,
        //     latitude,
        //     longitude
        // });

        // newgpsdata.save().then(newgpsdata => {
        //     console.log(newgpsdata)
        //     res.json({ Message: "Data Inserted" });
        // }).catch(err => console.log(err));
    }
});



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