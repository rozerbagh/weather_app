const request = require('request');

const options = {
    method: 'GET',
    url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk',
    headers: {
        'x-user-agent': 'desktop',
        'x-proxy-location': 'EU',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': 'd0e452be4bmsh2ebf2dc89cccc94p18b79fjsn6741bf2011b5',
        useQueryString: true
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});