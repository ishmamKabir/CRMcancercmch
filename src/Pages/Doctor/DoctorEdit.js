import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../Navbar'
import { fetchDoctor } from '../../actions/doctors';
import DoctorForm from '../components/DoctorStaffForm'
import {  editDoctor  } from '../../actions/doctors';
import _ from 'lodash';

class DoctorEdit extends React.Component {

  state = {
    image : null
  };

    componentDidMount() {
        this.props.fetchDoctor(this.props.match.params.id);
      }
    onSubmit = formValues => {
        this.props.editDoctor(this.props.match.params.id, formValues);
        
      };

    render(){
        if (!this.props.doctor) {
              return <div><Navbar/>
              
          <div className="all">
              <h1  className="heading-secondary" >Doctor Edit</h1></div>
              </div>;
            }
        return(
          <div><Navbar/>
          <div className="all">
              <h1 className="heading-secondary" >Doctor Edit</h1>
              <div className="doctor--form">
              <DoctorForm 
                initialValues={_.pick(this.props.doctor, 'name', "designation", "number", "email" , "image")}
                onSubmit={this.onSubmit}/>
                </div>
                </div>
          </div>  
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { doctor: state.doctors[ownProps.match.params.id] };
  };
export default connect(mapStateToProps, {editDoctor, fetchDoctor})(DoctorEdit);