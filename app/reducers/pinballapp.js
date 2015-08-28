var { ADD_SCORE, SET_LIVE_USER, SET_LIVE_SCORE, SORT_BY_SCORE_DESC, SORT_BY_SCORE_ASC , SORT_BY_USER_DESC , SORT_BY_USER_ASC } =require('../constants/ActionTypes');

const initialState = {
  scores: [],
  sortBy: undefined
};

function pinballapp(state = initialState, action) {
  switch (action.type) {
  case ADD_SCORE:
    return {...state, scores: [...state.scores, {score: Number(action.payload.score), user: action.payload.user}]};
  case SORT_BY_SCORE_DESC:
    return {...state, scores: [...state.scores.sort((a, b) => b.score - a.score)], sortBy: 'SCORE_DESC'}
  case SORT_BY_SCORE_ASC:
    return {...state, scores: [...state.scores.sort((a, b) => a.score - b.score)], sortBy: 'SCORE_ASC'}
  case SORT_BY_USER_DESC:
    return {...state, scores: [...state.scores.sort((a, b) => b.user > a.user ? 1 : -1)], sortBy: 'USER_DESC'}
  case SORT_BY_USER_ASC:
    return {...state, scores: [...state.scores.sort((a, b) => a.user > b.user ? 1 : -1)], sortBy: 'USER_ASC'}
  default:
    return state;
  }
}

module.exports = pinballapp;