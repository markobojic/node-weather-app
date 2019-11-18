const request = require('request');

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/716c87cd9a123a8102a80b086a52d66c/${lat},${long}?units=si`;

    request({url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find weather for selected location', undefined)
        } else {
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature,
            });
        };
    });
};

module.exports = forecast;
