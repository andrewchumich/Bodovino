var { ADD_WINES, EDIT_WINE } = require('../constants/ActionTypes');
// eventually convert to immutablejs
// var { OrderedMap, Map } = require('immutable');

var initialState = {
  wines: {},
  sortBy: undefined
}

function wines(state = initialState, action) {
  switch (action.type) {
  case ADD_WINES:
    return {...state, wines: {...state.wines, ...action.payload.entities.wines} };
  case EDIT_WINE:
    console.log(action.payload);
    return {...state, wines: {...state.wines, action['payload']['id']: action.payload } };
  default:
    return state;
  }
}

module.exports = wines;