const express = require('express');
const app = express();

app.get('/weather', (req, res) => {
    res.send({
        name: "from the other app file"
    })
});