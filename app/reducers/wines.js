var { SORT_BY_NAME_ASC, SORT_BY_NAME_DESC, ADD_WINES } = require('../constants/ActionTypes');
// eventually convert to immutablejs
// var { OrderedMap, Map } = require('immutable');

var initialState = {
  wines: [
  ],
  sortBy: undefined
}

// turn api wine list into local wine list
// this could be replaced with normalizr
function mapWines(state_wine_list, wine_list) {
  return wine_list.map(function(wine) {
    return {
      _id: state_wine_list.length,
      id: wine.id,
      name: wine.name,
      variety: wine.variety,
      origin: wine.origin,
      description: wine.description,
      image: wine.image
    }
  });
}

function wines(state = initialState, action) {
  switch (action.type) {
  case ADD_WINES:
    var new_wines = mapWines(state.wines, action.payload.wines);
    console.log(new_wines);
    return {...state, wines: [...state.wines.concat(new_wines)] };
  case SORT_BY_NAME_DESC:
    return {...state, wines: [...state.wines.sort((a, b) => b.name > a.name ? 1 : -1)], sortBy: 'NAME_DESC'}
  case SORT_BY_NAME_ASC:
    return {...state, wines: [...state.wines.sort((a, b) => a.name > b.name ? 1 : -1)], sortBy: 'NAME_ASC'}
  default:
    return state;
  }
}

module.exports = wines;