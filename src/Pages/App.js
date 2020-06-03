import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import DashBoard from './Home/Dashboard';
import Login from './Authentication/Login'
import * as actions from '../actions/auth';
import {connect} from 'react-redux';
import history from '../history';


import DoctorList from './Doctor/DoctorList';
import DoctorAdd from './Doctor/DoctorAdd';
import DoctorDetails from './Doctor/DoctorDetails';
import DoctorEdit from './Doctor/DoctorEdit';
import PatientList from './Patient/PatientList';
import PatientAdd from './Patient/PatientAdd';
import PatientDetails from './Patient/PatientDetails';
import PatientEdit from './Patient/PatientEdit';
import StaffList from './Staff/StaffList';
import StaffAdd from './Staff/StaffAdd';
import StaffDetails from './Staff/StaffDetails';
import StaffEdit from './Staff/StaffEdit';
import WardDetails from './Ward/WardDetails';
import Roster from './ProfessorRoster/roster'


import '../sass/main.scss'


class App extends React.Component {


  componentDidMount(){
    this.props.onTryAutoSignup();

  }

  render(){
    return (
      <div className="background">
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/" exact component={DashBoard} />
              <Route path = '/login/' exact component ={Login}/>
              <Route path='/patient/list' exact component={PatientList}/>
              <Route path='/patient/add/' exact component={PatientAdd}/>
              <Route path='/patient/details/:id/' exact component={PatientDetails}/>
              <Route path='/patient/edit/:id/' exact component={PatientEdit}/>
              <Route path='/doctor/list' exact component={DoctorList}/>
              <Route path='/doctor/add/' exact component={DoctorAdd}/>
              <Route path='/doctor/details/:id/' exact component={DoctorDetails}/>
              <Route path='/doctor/edit/:id/' exact component={DoctorEdit}/>
              <Route path='/staff/list' exact component={StaffList}/>
              <Route path='/staff/add/' exact component={StaffAdd}/>
              <Route path='/staff/details/:id/' exact component={StaffDetails}/>
              <Route path='/staff/edit/:id/' exact component={StaffEdit}/>
              <Route path='/ward/details' exact component={WardDetails}/>
              <Route path='/roster/' exact component={Roster}/>
              <Route component={() =>404}></Route>
              
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null
    }
  }


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
