var { normalize, Schema, arrayOf } = require('normalizr');
// once we know what the api response will look like, use this to normalize the data if necessary
const wine = new Schema('wines');
const rating = new Schema('ratings');


exports.wine = wine;
exports.rating = rating;