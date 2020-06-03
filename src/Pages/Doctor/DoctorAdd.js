import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../Navbar'

import DoctorForm from '../components/DoctorStaffForm'
import {  addDoctor } from '../../actions/doctors';


class DoctorAdd extends React.Component {


    onSubmit = formValues => {
        this.props.addDoctor( formValues);
      };
    render(){
          return(
          <div><Navbar/>
          
          <div className="all">
              <h1 className="heading-secondary" >Add Doctor</h1>
              <div className="doctor--form">
              <DoctorForm onSubmit={this.onSubmit}/>
              </div>
              </div>
          </div>  
        );
    }
}


export default connect(null, {addDoctor})(DoctorAdd);