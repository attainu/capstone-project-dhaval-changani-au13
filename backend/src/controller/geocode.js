const request = require("postman-request");
const dotenv = require("dotenv");
dotenv.config();

export const geocode = (address, callback) => {
    const url =
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        encodeURIComponent(address) +
        ".json?access_token=" +
        process.env.mapbox_api_key +
        "&limit=1";

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Not abel to fetch the data", undefined);
        } else if (body.features === 0) {
            callback("Not able to find the loacaiton, search again", undefined);
        } else {
            callback(undefined, { body });
        }
    });
};
