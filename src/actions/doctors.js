import history from '../history';
import * as actionTypes from './actionTypes';
import Axios from 'axios';


export const addDoctor = formValues => async (dispatch) => {
  const response = await Axios.post('/doctorcreate', formValues);

  dispatch({ type: actionTypes.ADD_DOCTOR, payload: response.data });
  history.push('/doctor/list');
};

export const fetchDoctors = (page , Name, designation,  Contact, email) => async dispatch => {
  if(Name === undefined){ Name=""}
  if(designation === undefined){ designation=""}
  if(Contact === undefined){ Contact=""}
  if(email === undefined){ email=""}
  const response = await Axios.get(`/doctorlist?search=${Name} ${designation} ${Contact} ${email}&page=${page}`);

  dispatch({ type: actionTypes.FETCH_DOCTORS, payload: response.data });
  dispatch({ type: actionTypes.COUNT, payload: response.data.count });
};

export const fetchDoctor = id => async dispatch => {
  const response = await Axios.get(`/${id}/singledoctor/`);

  dispatch({ type: actionTypes.FETCH_DOCTOR, payload: response.data });
};

export const editDoctor = (id, formValues) => async dispatch => {
  const response = await Axios.patch(`/${id}/doctorupdate/`, formValues);

  dispatch({ type: actionTypes.EDIT_DOCTOR, payload: response.data });
  history.push(`/doctor/details/${id}`);
};

