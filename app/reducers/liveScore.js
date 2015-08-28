var ReduxForm = require('redux-form');
var { SET_LIVE_USER, SET_LIVE_SCORE } = require('../constants/ActionTypes');

var liveScoreReducer = ReduxForm.reducer;

function liveScore(state = { data: {} }, action = {}) {
  switch (action.type) {
  case SET_LIVE_USER:
    return {...state, data: { ...state.data, user: action.payload } };
  case SET_LIVE_SCORE:
    return {...state, data: { ...state.data, score: action.payload.score } };
  default:
    return liveScoreReducer(state, action);
  }
}

module.exports = liveScore;