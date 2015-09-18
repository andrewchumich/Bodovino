var types = require('../constants/ActionTypes');
// import fetch from 'isomorphic-fetch';

exports.addWines = function(payload) {
  return {
    type: types.ADD_WINES,
    payload
  };
}

exports.editWine = function(payload) {
  return {
    type: types.EDIT_WINE,
    payload
  };
}

exports.sortByNameDesc = function() {
  return {
    type: types.SORT_BY_NAME_DESC
  };
}

exports.sortByNameAsc = function() {
  return {
    type: types.SORT_BY_NAME_ASC
  };
}

