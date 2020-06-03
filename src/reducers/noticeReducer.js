import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
      case actionTypes.FETCH_NOTICES:
        return { ...state={}, ...state, ..._.mapKeys(action.payload.results, 'id') };
      default:
        return state;
    }
  };