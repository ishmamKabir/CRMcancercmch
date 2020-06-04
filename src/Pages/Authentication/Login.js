import React from 'react';
import {Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux'

import logo from "../chittagong-medical-college-hospital-cmch-logo-0387EE353D-seeklogo.com.png";



import {authLogin, authKeepLogin} from '../../actions/auth';
import history from '../../history';

class Login extends React.Component {
  
  state = {
    rememberMe: false,
  };
  componentDidMount(){
    if(this.props.isAuthenticated){
      history.push('/');
   }

  }


  
  renderLoginFail = (err) => {
    if(err !== null){
      return(
        <div  style={{borderRadius: "1rem",marginBottom:"-1rem"}}  className='ui error message'>
          <div className='header'>{err}</div>
        </div>
      );
    }
  }

  renderError = ({error, touched}) =>{
    if(touched && error) {
      return (
        <div style={{borderRadius: "1rem", marginTop:"-1.5rem", marginBottom:"1.5rem"}} className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }
  renderInput = (formProps) => {
    return (
      <div className= 'form__group'>
        
        <input className= 'form__input' type={formProps.type} placeholder={formProps.placeholder} {...formProps.input} required />
        <label className="form__label" for={formProps.name}>{formProps.label}</label>
  
      </div>
    );
  }
  handleInputChange = (e) => {
    if(e.target.checked){
      this.setState({rememberMe: true })
    }else {
      this.setState({rememberMe: false })
    }
  }
  onSubmit=(formValues)=>{ 
    if(this.state.rememberMe){
      this.props.authKeepLogin(formValues.userName, formValues.password);
    }else{
      this.props.authLogin(formValues.userName, formValues.password);
    }
  }
  render(){
    return (
      <div className="login">
        <div className="creator">
                  <h1 className="creator__heading">
                    <span className="creator__heading--sub">Developed By</span>
                  <span className="creator__heading--main">Hamza Yusuff & Ishmam Kabir</span>
                  </h1>
        </div>
        
        <img style={{margin:"2rem", height:"15rem"}}  src={logo} alt="logo"/>
        <div className="login__form">
        <div className="u-margin-bottom-medium u-center-text ">
                                    <h2 class="heading-secondary">
                                        Login
                                    </h2>
                                    <p className="paragraph">Welcome back! Please login to continue.</p>
                                </div>
        <form className='form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name='userName' component={this.renderInput} label='Username' type='text' placeholder='Username'/>
          <Field name='password' component={this.renderInput} label='Password' type="password" placeholder='Password'/>
        
          <div className="form__group">
            <div className="form__radio-group">
              <input type="checkbox" className="form__radio-input" id="small" name="rememberMe" checked={this.state.rememberMe}
              onChange={this.handleInputChange} />
                <label for="small" className="form__radio-label">
                  <span className="form__radio-button"></span>
                  Remember Me
                </label>
              </div>
          </div>
          {this.renderLoginFail(this.props.err)}
          <br/>
          <button type="submit" className= "btn btn--blue"  >Login</button>
        </form>
        </div>
      </div>

    );
  }


}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    err: state.auth.error
  }
}

const validate = (formValues) =>{
  const errors = {};
  if(!formValues.userName){
    errors.userName = 'You must enter a username';
  }
  if(!formValues.password){
    errors.password = 'You must enter a password';
  }
  return errors;
};


export default connect(mapStateToProps, {authLogin, authKeepLogin})(reduxForm({
  form: 'login',
  validate
})(Login));
