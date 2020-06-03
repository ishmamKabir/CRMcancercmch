import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../Navbar'
import history from '../../history';
import profileImg from '../kemptons-blank-profile-picture.jpg'
import { fetchDoctor } from '../../actions/doctors';


class DoctorDetails extends React.Component {

  componentDidMount() {
    this.props.fetchDoctor(this.props.match.params.id);
  }

  renderImg = () => {
    if(this.props.doctor.image !== null){
      let Link = `https://www.cancercmch.xyz/${this.props.staff.image}`
      return <img src={Link} alt="profile"/>
    }else {
      return <img src={profileImg} alt='profile'/>
    }
  }

    render(){
      if (!this.props.doctor) {
        return <div><Navbar/>
              <div className='all'>
        <h1 className="heading-secondary">Doctor Details</h1></div></div>;
      }
        return(
          <div>
              <Navbar/>
              <div className='all'>
              <h1 className="heading-secondary">Doctor Details</h1>
            <button  className= 'btn btn--white'  onClick={()=> history.push(`/doctor/edit/${this.props.match.params.id}`)} >Edit</button>

            
            <div className="doctor--details">
              {this.renderImg()}
              <div className="doctor--details__paragraph">
              <p><label>Name:</label> {this.props.doctor.name}</p> 
              <p><label>Designation:</label> {this.props.doctor.designation}</p>
              <p><label>Phone Number:</label> 0{this.props.doctor.number}</p>
              <p><label>Gender:</label> {this.props.doctor.sex}</p>
              <p><label>Email:</label> {this.props.doctor.email}</p>
              <p><label>Address:</label> {this.props.doctor.address}</p>
              </div>
              </div>
              </div>
          </div>  
        );
    }
}



const mapStateToProps = (state, ownProps) => {
  return { doctor: state.doctors[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchDoctor})(DoctorDetails);
