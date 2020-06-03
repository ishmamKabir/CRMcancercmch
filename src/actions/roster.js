import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const fetchRoster = () => async dispatch => {
  const response = await Axios.get('/roster');

  dispatch({ type: actionTypes.FETCH_ROSTER, payload: response.data });
  
};