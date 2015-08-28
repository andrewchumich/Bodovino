var types = require('../constants/ActionTypes');
// import fetch from 'isomorphic-fetch';

exports.setRating = function(payload) {
  return {
    type: types.SET_RATING,
    payload
  };
}