import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../Navbar'
import history from '../../history';
import { fetchStaffs } from '../../actions/staffs';
import {Field, reduxForm } from 'redux-form';
import Pagination from '../components/PaginationRounded'
 

class StaffList extends React.Component {

  state = {
    search: false,
    Name: undefined,
    designation: undefined,
    Contact: undefined,
    Email: undefined
  };
    componentDidMount() {
        this.props.fetchStaffs(1);
    }

    pagination = (page) =>{
      this.props.fetchStaffs(page, this.state.Name,  this.state.designation, this.state.Contact, this.state.Email);
    }

    search = () => {
        if(this.state.search){
          this.setState({search: false , Name: undefined , designation: undefined, Contact: undefined, Email:undefined});
          this.props.fetchStaffs(1);
        }else{
          this.setState({search: true});
          this.props.reset();
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
      const Name = formValues.name;
      const designation = formValues.designation;
      const Contact = formValues.number;
      const Email = formValues.Email
      this.setState({Name: Name , designation: designation, Contact:Contact, email:Email})
      this.props.fetchStaffs(1, Name,  designation, Contact, Email);

    }

    renderSearch = () => {
      if(this.state.search){
      return (
        <div className= 'search' >
          <form  className= 'search' onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name='name' component={this.renderInput}  type='text' placeholder='Name'/>
          <Field name='designation' component={this.renderInput}  type="text"  placeholder="Designation" />
          <Field name='number' component={this.renderInput}  type="text"  placeholder="Phone Number" />
          <Field name='Email' component={this.renderInput}  type="text"  placeholder='Machine Room'/>
          <button className= 'btn btn--white'  >Search</button>
          </form>
        </div>
      );}
    }
    renderList = () => {
        return this.props.staffs.map(data => {
          return (
            <tr  key={data.id} onClick= {() => history.push(`/staff/details/${data.id}`) } >
                <td>
                  {data.name}
                </td>
                <td className="designation">{data.designation}</td>
                <td className="number">{data.number}</td>
                <td className="email">{data.machine}</td>
            </tr>
          );
        });
      }

    render(){
        return(
          <div ><Navbar/>
            <div className="all">
                <h1 className="heading-secondary">Staff List</h1>
          
                {this.renderSearch()}
                <table style={{backgroundColor:"white", borderRadius:"2rem", position:"relative" }} className="ui selectable  basic padded  table">
                <thead style={{borderBottom:"2px solid black"}}>
                      <tr>
                      <th>
                    <button onClick={this.search} className= 'btn btn--white' >Search</button>
                    <button onClick= {() => history.push('/staff/add/') } className= 'btn btn--white absRight'>Add Staff</button>
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                    </tr></thead>
                    <thead>
                        <tr>
                          <th>Name</th>
                            <th>Designation</th>
                            <th>Phone Number</th>
                            <th>Machine Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
               </table>
               <Pagination change={this.pagination} count={this.props.count} />
            </div>
          </div>  
        );
    }
}

const mapStateToProps = state => {
    return {
      staffs: Object.values(state.staffs),
      count: Math.ceil(state.count/35)
    };
  };
  
export default connect(mapStateToProps,  
  { fetchStaffs })(reduxForm({
    form: 'staffSearch',
})(StaffList));
