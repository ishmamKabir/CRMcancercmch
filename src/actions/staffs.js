import history from '../history';
import * as actionTypes from './actionTypes';
import Axios from 'axios';


export const addStaff = formValues => async (dispatch) => {
  const response = await Axios.post('/staffcreate', formValues);

  dispatch({ type: actionTypes.ADD_STAFF, payload: response.data });
  history.push('/staff/list');
};

export const fetchStaffs = (page , Name, designation,  Contact, email) => async dispatch => {
  if(Name === undefined){ Name=""}
  if(designation === undefined){ designation=""}
  if(Contact === undefined){ Contact=""}
  if(email === undefined){ email=""}
  const response = await Axios.get(`/stafflist?search=${Name} ${designation} ${Contact} ${email}&page=${page}`);

  dispatch({ type: actionTypes.FETCH_STAFFS, payload: response.data });
  dispatch({ type: actionTypes.COUNT, payload: response.data.count });

};

export const fetchStaff = id => async dispatch => {
  const response = await Axios.get(`/${id}/singlestaff/`);

  dispatch({ type: actionTypes.FETCH_STAFF, payload: response.data });
};

export const editStaff = (id, formValues) => async dispatch => {
  const response = await Axios.patch(`/${id}/staffupdate/`, formValues);

  dispatch({ type: actionTypes.EDIT_STAFF, payload: response.data });
  history.push(`/staff/details/${id}`);
};

