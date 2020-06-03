import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const fetchNotices = () => async dispatch => {
  const response = await Axios.get('/noticelist');

  dispatch({ type: actionTypes.FETCH_NOTICES, payload: response.data });
  dispatch({ type: actionTypes.COUNT, payload: response.data.count });
};