import React from 'react';
import {Field, reduxForm } from 'redux-form';

class DoctorStaffForm extends React.Component {

    state = {
      image : null,
    };
    renderError({ error, touched }) {
        if (touched && error) {
          return (
            <div className="ui error message">
              <div className="header">{error}</div>
            </div>
          );
        }
      }
    
    renderInput = ({ input, meta ,type, placeholder, required }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
          <div className={className}> 
            <input type={type} placeholder={placeholder} {...input} {...required} style={{ marginRight: '1%', marginBottom:".25%" , marginTop:"1%"}} autoComplete="off" />
            {this.renderError(meta)}
          </div>
        );
      };
  
      renderTextarea = ({ input, meta ,rows, placeholder, value, attach }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
          <div className={className}> 
            <textarea rows={rows} placeholder={placeholder} value={value} {...input}  autoComplete="off" ></textarea>
            {this.renderError(meta)}
          </div>
        );
      };  

    onSubmit = formValues => {
      let form_data = new FormData();
      if(this.state.image !== null){
        form_data.append('image', this.state.image, this.state.image.name);
      }
      form_data.append('name', formValues.name);
      form_data.append('designation', formValues.designation);
      form_data.append('number', formValues.number);
      form_data.append('email', formValues.email);
      for(var pair of form_data.entries()) {
        if(pair[1] === 'undefined' || pair[1] === 'null' ){
          form_data.set(pair[0], '')
        }
     }
      this.props.onSubmit(form_data);
      };
    
    renderForm = () => {
        return (
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form error"
            >
            <div className="doctor--input">
            <p>Profile Image<input  name="image"  type='file' id="image"  accept="image/*" onChange= {(e)=> this.setState({image:e.target.files[0]})}/></p>
            <Field name="name" component={this.renderInput} type='text' placeholder="Name" />
            <div className="fields">
              <label className="label">Gender:</label>
                  <Field name="sex" component={this.renderInput} type="radio" value="Male"/><label>Male</label>
                  <Field name="sex" component={this.renderInput} type="radio" value="Female"/><label>Female</label>
                  <Field name="sex" component={this.renderInput} type="radio" value="Other"/><label>Other</label>
              </div>
            <Field name="designation" component={this.renderInput} type='text' placeholder="Designation" />
            <Field name="number" component={this.renderInput} type='text' placeholder="Phone Number" />
            <Field name="email" component={this.renderInput} type='email' placeholder="Email" />
            <Field name="address" component={this.renderTextarea} rows='4' placeholder='Address'/>

            <button className="btn btn--blue">Submit</button>
            </div>
            </form>
        );        
    }


    render(){
        return(
          <div>
              {this.renderForm()}
          </div>  
        );
    }
}

const validate = formValues => {
    const errors = {};
  
    if (!formValues.name) {
      errors.fname= 'You must enter a Name';
    }
  
    if (!formValues.designation) {
      errors.designation= 'You must enter a Designation';
    }

    if (!formValues.number) {
        errors.number= 'You must enter a Phone Number';
    }

    

  
    return errors;
  };

export default reduxForm({
    form: 'doctorStaffForm',
    validate
})(DoctorStaffForm);