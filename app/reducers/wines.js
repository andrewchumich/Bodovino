var { SORT_BY_NAME_ASC, SORT_BY_NAME_DESC, ADD_WINES } = require('../constants/ActionTypes');
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
  default:
    return state;
  }
}

module.exports = wines;