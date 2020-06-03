import * as actionTypes from './actionTypes';
import roster from '../apis/api';

export const fetchRoster = () => async dispatch => {
  const response = await roster.get('/roster');

  dispatch({ type: actionTypes.FETCH_ROSTER, payload: response.data });
  
};