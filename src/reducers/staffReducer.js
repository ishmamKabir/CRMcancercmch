import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
      case actionTypes.FETCH_STAFFS:
        return { ...state={}, ...state, ..._.mapKeys(action.payload.results, 'id') };
      case actionTypes.FETCH_STAFF:
        return { ...state={},...state, [action.payload.id]: action.payload };
      case actionTypes.ADD_STAFF:
        return { ...state={},...state, [action.payload.id]: action.payload };
      case actionTypes.EDIT_STAFF:
        return { ...state={},...state, [action.payload.id]: action.payload };
      default:
        return state;
    }
  };