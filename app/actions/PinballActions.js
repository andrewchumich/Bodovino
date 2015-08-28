var types = require('../constants/ActionTypes');
// import fetch from 'isomorphic-fetch';

exports.addScore = function(payload) {
  return {
    type: types.ADD_SCORE,
    payload
  };
}

exports.setLiveScore = function(payload) {
  return {
    type: types.SET_LIVE_SCORE,
    payload
  };
}

exports.setLiveUser = function(payload) {
  return {
    type: types.SET_LIVE_USER,
    payload
  };
}

exports.sendScore = function(payload) {
  if(!payload.score || !payload.user) {
    return {};
  }
  return dispatch => {
    return firebaseRef.push({score: payload.score, user: payload.user}, function(val) {
      console.log('RETURNED:', val);
    });
  }
}

exports.sortByScoreDesc = function() {
  return {
    type: types.SORT_BY_SCORE_DESC
  };
}

exports.sortByScoreAsc = function() {
  return {
    type: types.SORT_BY_SCORE_ASC
  };
}

exports.sortByUserDesc = function() {
  return {
    type: types.SORT_BY_USER_DESC
  };
}

exports.sortByUserAsc = function() {
  return {
    type: types.SORT_BY_USER_ASC
  };
}

