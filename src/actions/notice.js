import * as actionTypes from './actionTypes';
import notice from '../apis/api';

export const fetchNotices = () => async dispatch => {
  const response = await notice.get('/noticelist');

  dispatch({ type: actionTypes.FETCH_NOTICES, payload: response.data });
  dispatch({ type: actionTypes.COUNT, payload: response.data.count });
};