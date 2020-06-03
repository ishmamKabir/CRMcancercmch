import wards from '../apis/api';
import history from '../history';
import * as actionTypes from './actionTypes';


export const addWard = (formValues, firstname, lastname, phone, reg, sex, Age, patientid) => async (dispatch) => {
  const response = await wards.post('/wardcreate', { ...formValues ,firstname, lastname, phone, reg, sex, Age, patientid});

  dispatch({ type: actionTypes.ADD_WARD, payload: response.data });
  history.push('/ward/details');
};

export const fetchWards = (page, fName, LName, Age, Contact, regNum) => async dispatch => {
  if(fName === undefined){ fName=""}
  if(LName === undefined){ LName=""}
  if(Age === undefined){ Age=""}
  if(Contact === undefined){ Contact=""}
  if(regNum === undefined){ regNum=""}
  const response = await wards.get(`/wardlist?search=${fName} ${LName} ${Age} ${Contact} ${regNum}&page=${page}`);

  dispatch({ type: actionTypes.FETCH_WARDS, payload: response.data });
};

export const fetchWard = id => async dispatch => {
  const response = await wards.get(`/ward/${id}`);

  dispatch({ type: actionTypes.FETCH_WARD, payload: response.data });
};

export const editWard = (id, formValues) => async dispatch => {
  const response = await wards.patch(`/ward/${id}`, formValues);

  dispatch({ type: actionTypes.EDIT_WARD, payload: response.data });
  history.push('/');
};

export const deleteWard = id => async dispatch => {
  await wards.delete(`/${id}/warddelete/`);

  dispatch({ type: actionTypes.DELETE_WARD, payload: id });
  history.push('/ward/details');
};
