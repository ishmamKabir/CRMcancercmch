import React from 'react';
import {connect} from 'react-redux';
import history from '../../history';
import Navbar from '../Navbar'
import profileImg from '../kemptons-blank-profile-picture.jpg'
import { fetchStaff } from '../../actions/staffs';


class StaffDetails extends React.Component {

    componentDidMount() {
        this.props.fetchStaff(this.props.match.params.id);
      }

      
  renderImg = () => {
    if(this.props.staff.image !== null){
      let Link = `https://www.cancercmch.xyz/${file}`
      return <img src={Link} alt="profile"/>
    }else {
      return <img src={profileImg} alt='profile'/>
    }
  }
    
        render(){
          if (!this.props.staff) {
            return <div><Navbar/>
            <div className="all">
            <h1 className="heading-secondary" >Staff Details</h1></div>;
            </div>
          }
          return(
            <div>
                <Navbar/>
                <div className='all'>
                <h1 className="heading-secondary">Staff Details</h1>
                <button  className= 'btn btn--white'  onClick={()=> history.push(`/staff/edit/${this.props.match.params.id}`)} >Edit</button>
              <div className="doctor--details">
                {this.renderImg()}
                <div className="staff--details__paragraph">
                <p><label>Name:</label> {this.props.staff.name}</p> 
                <p><label>Age:</label> {this.props.staff.Age}</p>
                <p><label>Gender:</label> {this.props.staff.sex}</p>
                <p><label>Phone Number:</label> {this.props.staff.number}</p>
                <p><label>Designation:</label> {this.props.staff.designation}</p>
                <p><label>Address:</label> {this.props.staff.address}</p>
                <p><label>Machine Room:</label> {this.props.staff.machine}</p>
                </div>
                </div>
                </div>
            </div>  
          );
      }
  }
  
  

  const mapStateToProps = (state, ownProps) => {
    return { staff: state.staffs[ownProps.match.params.id] };
  };
  export default connect(mapStateToProps, { fetchStaff})(StaffDetails);
  