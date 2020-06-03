import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../Navbar'
import { fetchStaff } from '../../actions/staffs';
import StaffForm from './StaffForm';
import {  editStaff  } from '../../actions/staffs';
import _ from 'lodash';


class StaffEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStaff(this.props.match.params.id);
      }
    onSubmit = formValues => {
        this.props.editStaff(this.props.match.params.id, formValues);
      };


      render(){
        if (!this.props.staff) {
              return <div><Navbar/>
             <div className="all">
              <h1  className="heading-secondary" >Staff Edit</h1></div>
              </div>;
            }
            return(
                <div><Navbar/><div className="all">
                    <h1 className="heading-secondary" >Staff Edit</h1>
                    <div className="doctor--form">
                    <StaffForm 
                      initialValues={_.pick(this.props.staff, 'name', "designation", "number", "Age", "address" ,"sex", "machine")}
                      onSubmit={this.onSubmit}/>
                      </div>
                      </div>
                </div>  
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { staff: state.staffs[ownProps.match.params.id] };
  };
  export default connect(mapStateToProps, {editStaff, fetchStaff})(StaffEdit);