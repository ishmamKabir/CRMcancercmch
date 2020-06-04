
import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
      case actionTypes.FETCH_ROSTER:
        return action.payload.results[0]
      default:
        return state;
    }
  };