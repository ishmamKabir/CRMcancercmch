import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../Navbar'
import PatientForm from './PatientForm'
import {  addPatient } from '../../actions/patients';

class PatientAdd extends React.Component {

  onSubmit = formValues => {
    this.props.addPatient( formValues);
  };
    render(){
        return(
          <div><Navbar/>
          <div className="all">
              <h1 className="heading-secondary head">Add Patient</h1>
              <PatientForm onSubmit={this.onSubmit}/>
            </div>   
          </div>  
        );
    }
}



export default connect(null , { addPatient } )(PatientAdd);