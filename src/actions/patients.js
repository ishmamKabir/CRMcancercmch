import history from '../history';
import * as actionTypes from './actionTypes';
import Axios from 'axios';


export const addPatient = formValues => async (dispatch, getState) => {
  const response = await Axios.post('/patientcreate', formValues);

  dispatch({ type: actionTypes.ADD_PATIENT, payload: response.data });
  history.push('/patient/list');
};

export const fetchPatients = (page, fName, LName, Age, Contact, regNum, sort) => async dispatch => {
  if(fName === undefined){ fName=""}
  if(LName === undefined){ LName=""}
  if(Age === undefined){ Age=""}
  if(Contact === undefined){ Contact=""}
  if(regNum === undefined){ regNum=""}
  const response = await Axios.get(`/patientlist?search=${fName} ${LName} ${Age} ${Contact} ${regNum}&page=${page}&ordering=${sort}`);

  dispatch({ type: actionTypes.FETCH_PATIENTS, payload: response.data });
  dispatch({ type: actionTypes.COUNT, payload: response.data.count });
};

export const fetchPatient = id => async dispatch => {
  const response = await Axios.get(`/${id}/singlepatient/`);

  dispatch({ type: actionTypes.FETCH_PATIENT, payload: response.data });
};

export const editPatient = (id, formValues) => async dispatch => {
  const response = await Axios.patch(`/${id}/patientupdate/`, formValues);

  dispatch({ type: actionTypes.EDIT_PATIENT, payload: response.data });
  history.push(`/patient/details/${id}`);
};

