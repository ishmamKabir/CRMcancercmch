import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../Navbar'
import history from '../../history';
import { fetchPatients } from '../../actions/patients';
import {Field, reduxForm } from 'redux-form';

import Pagination from '../components/PaginationRounded'

class PatientList extends React.Component {
  state = {
    search: false,
    fName: undefined,
    lName: undefined,
    Age: undefined,
    Contact: undefined,
    regNum: undefined
  };

  componentDidMount() {
        this.props.fetchPatients(1);
    }

    pagination = (page) =>{
      this.props.fetchPatients(page, this.state.fName, this.state.LName, this.state.Age, this.state.Contact, this.state.regNum);
    }
    
    search = () => {
        if(this.state.search){
          this.setState({search: false , fName: undefined , lName: undefined, Age: undefined, Contact:undefined, regNum:undefined});
          this.props.fetchPatients(1);
        }else{
          this.setState({search: true });
          this.props.reset();
          
        }
    }

    renderInput = (formProps) => {
      return (
        <>
          <input className="search__field" type={formProps.type} placeholder={formProps.placeholder} {...formProps.input} style={{ marginRight: '1%', marginBottom:".25%" , marginTop:"1%"}}/>
        </>
      );
    }
    onSubmit=(formValues)=>{ 
      const fName = formValues.FirstName;
      const LName = formValues.LastName;
      const Age = formValues.Age;
      const Contact = formValues.PhoneNumber;
      const regNum = formValues.RegistrationNumber
      this.setState({fName: fName , lName: LName, Age: Age, Contact:Contact, regNum:regNum })
      this.props.fetchPatients(1, fName, LName, Age, Contact, regNum);
    }

    renderSearch = () => {
      if(this.state.search){
      return (
        <div className= 'search' >
          <form  className= 'search' onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name='FirstName' component={this.renderInput}  type='text' placeholder='First Name'/>
          <Field name='LastName' component={this.renderInput}  type="text"  placeholder='Last Name'/>
          <Field name='Age' component={this.renderInput}  type="text"  placeholder="Age" />
          <Field name='PhoneNumber' component={this.renderInput}  type="text"  placeholder="Phone Number" />
          <Field name='RegistrationNumber' component={this.renderInput}  type="text"  placeholder="Registration Number" />
          <button className= 'btn btn--white' >Search</button>
          </form>
        </div>
      );}
    }

    renderList = () => {
        return this.props.patients.map(patient => {
          return (
            <tr  key={patient.id} onClick= {() => history.push(`/patient/details/${patient.id}`) } >
                <td>
                  {patient.fname} {patient.lname}
                </td>
                <td className="age">{patient.Age}</td>
                <td className="registration">{patient.registration}</td>
                <td className="phoneNumber">{patient.Contact}</td>
                <td className="sex">{patient.sex}</td>
            </tr>
          );
        });
      }

    renderTable = () =>{
      return (
        <table style={{backgroundColor:"white", borderRadius:"2rem", position:"relative" }} className="ui selectable  basic padded  table">
          <thead style={{borderBottom:"2px solid black"}}><tr><th>
          <button onClick={this.search} className= 'btn btn--white' >Search</button>
          <button onClick= {() => history.push('/patient/add/') } className= 'btn btn--white absRight'>Add Patient</button>
          </th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          </tr></thead>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Registration Number</th>
                  <th>Phone Number</th>
                  <th>Sex</th>
              </tr>
          </thead>
          <tbody>
              {this.renderList()}
          </tbody>

        </table>
      );
    

    }

    render(){
        return(
          <div ><Navbar/>
            <div className="patient">
                <h1 className="heading-secondary">Patient List</h1>
                
                {this.renderSearch()}
                {this.renderTable()}
                <Pagination  change={this.pagination} count={this.props.count} />
            </div>
          </div>  
        );
    }
}

const mapStateToProps = state => {
    return {
      patients: Object.values(state.patients),
      count: Math.ceil(state.count/35)
    };
  };
  

export default connect(mapStateToProps, { fetchPatients } )(reduxForm({
    form: 'patientSearch',
})(PatientList));