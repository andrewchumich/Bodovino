var { SET_RATING } = require('../constants/ActionTypes');
// eventually convert to immutablejs
// var { OrderedMap, Map } = require('immutable');

var initialState = {
}

var sample_rating = {
  id: 0,
  user_id: 'uuid',
  wine_id: 0,
  score: 5,
  notes: 'some notes'
}

function wines(state = initialState, action) {
  switch (action.type) {
  case SET_RATING:
    return {...state, ...action.payload.entities.wines };
  default:
    return state;
  }
}

module.exports = wines;