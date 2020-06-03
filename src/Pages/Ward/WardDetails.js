import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../Navbar'
import history from '../../history';
import {Field, reduxForm } from 'redux-form';
import { fetchWards, addWard, deleteWard } from '../../actions/wards';
import PatientList from "./PatientList"
import Modal from './Modal'
import { fetchPatient} from '../../actions/patients';


class WardDetails extends React.Component {

  state = {
    search: false,
    modal1:false,
    modal2:false, 
    id: null,
    modal3: false
  };
    componentDidMount() {
        this.props.fetchWards(1);
    }

    search = () => {
      if(this.state.search){
        this.setState({search: false});
        this.props.fetchWards(1);
      }else{
        this.setState({search: true});
        this.props.reset();

      }
  }
  modal1 = () => {
    if(this.state.modal1){
      this.setState({modal1: false});
    }else{
      this.setState({modal1: true});
    }
}



  renderInput = (formProps) => {
    return (
      <>
        <input className="search__field"  type={formProps.type} placeholder={formProps.placeholder} {...formProps.input} style={{ marginRight: '1%', marginBottom:".25%" , marginTop:"1%"}}/>
      </>
    );
  }
  onSubmit=(formValues)=>{ 
      const fName = formValues.FirstName;
      const LName = formValues.LastName;
      const Age = formValues.Age;
      const Contact = formValues.PhoneNumber;
      const regNum = formValues.RegistrationNumber
      this.props.fetchWards(1, fName, LName, Age, Contact, regNum);

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
        <button className= 'btn btn--white'  >Search</button>
        </form>
      </div>
    );}
  }


    renderList1 = () => {
        return this.props.wards.map(data => {
                return (
                    <tr  key={data.id}   >
             
                        <td onClick= {() => history.push(`/patient/details/${data.patientid}`) } >
                        {data.firstname} {data.lastname} 
                        </td>
                        <td onClick= {() => history.push(`/patient/details/${data.patientid}`) } className="designation">{data.wardnum}</td>
                        <td onClick= {() => history.push(`/patient/details/${data.patientid}`) } className="designation">{data.bednum}</td>
                        <td onClick= {() => history.push(`/patient/details/${data.patientid}`) } className="Contact">{data.phone}</td>
                        <td onClick= {() => history.push(`/patient/details/${data.patientid}`) } className="registration">{data.reg}</td>
         
                        <td className="right aligned"><button style={{fontSize:"1.6rem", borderRadius:"1rem"}} className="negative ui button" onClick={()=> this.Remove(data.id)}>Remove</button></td>               
                    </tr>
            );
        
        });
      }

      Remove = (id) => {
        this.setState({modal1:false, modal2:false, modal3: true, id:{id}});


      }

      renderError({ error, touched }) {
        if (touched && error) {
          return (
            <div className="ui error message">
              <div className="header">{error}</div>
            </div>
          );
        }
      }
    
    renderInput2 = ({ input, meta ,type, placeholder, required }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
          <div className={className}> 
            <input type={type} placeholder={placeholder} {...input} {...required} style={{ marginRight: '1%', marginBottom:".25%" , marginTop:"1%"}} autoComplete="off" />
            {this.renderError(meta)}
          </div>
        );
      };

     onSubmitWard = (formValues) => {
      
      const firstname = this.props.patient[0].fname
      const lastname = this.props.patient[0].lname
      const Phone= this.props.patient[0].Contact
      const reg = this.props.patient[0].registration
      const sex = this.props.patient[0].sex
      const Age = this.props.patient[0].Age
      const patientid = this.props.patient[0].id
  
      
      this.props.addWard(formValues, firstname, lastname, Phone, reg, sex, Age, patientid );
      this.setState({modal1:false, modal2:false});
      this.props.fetchWards(1);
     } 

    renderContent=()=>{
      if(this.state.modal1){
      return <PatientList next={this.next} />
    }else if (this.state.modal2){
      return (
        <form style={{borderRadius:"1rem", fontSize:"1.6rem"}}
        onSubmit={this.props.handleSubmit(this.onSubmitWard)}
        className="ui form error"
      >
        <div className="two fields">
              <Field name="wardnum" component={this.renderInput2} type='number' placeholder="Ward Number" />
              <Field name="bednum" component={this.renderInput2} type='number' placeholder="Bed Number" />
        </div>
        <button className="btn btn--blue">Submit</button>
        </form>
      );
    }else if(this.state.modal3){
      return (
        <div>
        <p style={{fontSize:"1.6rem",}}>Do you really want remove the patient from the ward?</p>
          
        </div>
      );
      }
    }
    next = (id) => {
      this.setState({modal1:false, modal2:true});
      this.props.fetchPatient(id);

      
    }

    YesDelete = (id) => {
      this.props.deleteWard(id)
      this.setState({modal1:false, modal2:false, modal3:false, id:null})
      this.props.fetchWards(1);
    }

renderActions =() => {
  const { id } = this.state.id

  return (
    <React.Fragment>
      <button style={{fontSize:"1.6rem", borderRadius:"1rem"}}
            onClick={() => this.YesDelete(id)}
            className="ui button negative"
          >
            Yes
          </button>
          <button style={{fontSize:"1.6rem", borderRadius:"1rem"}} className="ui button" onClick={() => this.setState({modal1:false, modal2:false, modal3:false, id:null})}>
            No
          </button>
    </React.Fragment>
  );
}      
    
     
    renderModal =()=> {
      if(this.state.modal1){
      return (
        <Modal
          title="Select Patient"
          content={this.renderContent()}
          onDismiss={() => this.setState({modal1:false, modal2:false, modal3:false})}
          actions=" "

        />
      );}else if (this.state.modal2){
        return <Modal title="Enter Ward and Bed Number" content={this.renderContent()}  onDismiss={() => this.setState({modal1:false, modal2:false, modal3:false})} />
      }else if(this.state.modal3) {
        return <Modal title="Are you sure?" actions={this.renderActions()} content={this.renderContent()}  onDismiss={() => this.setState({modal1:false, modal2:false, modal3:false})} /> 
      }
    }

    render(){
        return(
          <div ><Navbar/>
            <div className="ward" >
                <h1 className="heading-secondary">Ward Details</h1>
                {this.renderSearch()}
              
               
                <table style={{backgroundColor:"white", borderRadius:"2rem", position:"relative" }} className="ui selectable  basic padded  table">
                <thead style={{borderBottom:"2px solid black"}}><tr><th>
          <button onClick={this.search} className= 'btn btn--white' >Search</button>
          <button className= 'btn btn--white absRight' onClick={this.modal1}>Add Patient</button>
          </th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          </tr></thead>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ward Number</th>
                            <th>Bed Number</th>
                            <th>Phone Number</th>
                            <th>Registration</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList1()}
                    </tbody>
                  
                </table>
            </div>
            {this.renderModal()}
          </div>  
        );
    }
}
const validate = formValues => {
  const errors = {};

  if (formValues.wardNumber !== "1" && formValues.wardNumber!=="2") {
    errors.wardNumber= 'You must enter a Ward Number of 1 or 2';
  }

  if (!formValues.wardNumber) {
    errors.wardNumber= 'You must enter a Ward Number';
  }
  if (!formValues.bedNumber) {
    errors.bedNumber= 'You must enter a Bed Number';
  }


  return errors;
};


const mapStateToProps = (state) => {
    return {
      wards: Object.values(state.wards),
      patient: Object.values(state.patients)
    };
  };
  
export default connect(mapStateToProps, 
  { fetchWards, fetchPatient, addWard, deleteWard })(reduxForm({
    form: 'wardSearch',
    validate
})(WardDetails));
