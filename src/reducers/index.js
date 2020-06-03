import {combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import patientReducer from './patientReducer';
import doctorReducer from './doctorReducer';
import staffReducer from './staffReducer';
import wardReducer from './wardReducer';
import noticeReducer from './noticeReducer';
import rosterReducer from './rosterReducer';
import countReducer from './countReducer';





export default combineReducers({
  form: formReducer,
  auth: authReducer,
  patients: patientReducer,
  doctors: doctorReducer,
  staffs: staffReducer,
  wards: wardReducer,
  notice: noticeReducer,
  count: countReducer,
  roster: rosterReducer
});
