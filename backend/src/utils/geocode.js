const request = require("postman-request");
const dotenv = require("dotenv");
dotenv.config();

// First we will put a address into mapbox API ane it will return us the co-ordinates
// encodeURIComponent function will take care of special character conversion

const geocode = (address, callback) => {
    const url =
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        encodeURIComponent(address) +
        ".json?access_token=" +
        process.env.MAPBOX_KEY +
        "&limit=1";

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Not abel to fetch the data", undefined);
        } else if (body.features === 0) {
            callback("Not able to find the loacaiton, search again", undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            });
        }
    });
};

module.exports = geocode;
