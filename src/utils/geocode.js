const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibWFya28wMjEiLCJhIjoiY2syb2d1aDU4MTM4MTNkbjNndjkwbWQ4biJ9.iSn7YqSqX3-xMrj2Grh6aw&limit=1`;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to geoCoding service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            })
        }
    });
}

module.exports = geocode;