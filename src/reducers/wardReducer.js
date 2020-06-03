import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
      case actionTypes.FETCH_WARDS:
        return { ...state={}, ...state, ..._.mapKeys(action.payload.results, 'id') };
      case actionTypes.FETCH_WARD:
        return { ...state={},...state, [action.payload.id]: action.payload };
      case actionTypes.ADD_WARD:
        return {...state={},...state, [action.payload.id]: action.payload };
      case actionTypes.EDIT_WARD:
        return {...state={},...state, [action.payload.id]: action.payload };
      case actionTypes.DELETE_WARD:
        return _.omit(state, action.payload);
      default:
        return state;
    }
  };