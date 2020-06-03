import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../Navbar'

import StaffForm from './StaffForm'
import {  addStaff } from '../../actions/staffs';


class StaffAdd extends React.Component {


    onSubmit = formValues => {
        this.props.addStaff( formValues);
      };
    render(){
          return(
          <div><Navbar/>
            <div className="all">
              <h1 className="heading-secondary" >Add Staff</h1>
              <div className="doctor--form">
              <StaffForm onSubmit={this.onSubmit}/>
              </div>
              </div>
            </div>    
        );
    }
}


export default connect(null, {addStaff})(StaffAdd);