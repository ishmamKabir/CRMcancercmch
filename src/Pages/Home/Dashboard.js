import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../Navbar'
import history from '../../history';
import { fetchWards } from '../../actions/wards';
import { fetchNotices } from '../../actions/notice';


class Dashboard extends React.Component {

    state = {
        allNotice:false,
        notice:"Show All"
      };
 
 
    componentDidMount() {
        this.props.fetchWards(1);
        this.props.fetchNotices();
    }

   

    renderList = () => {
        return this.props.wards.map(data => {
          
                return (
                    <tr  key={data.id} onClick= {() => history.push(`/patient/details/${data.patientid}`) } >
                        <td>
                        {data.firstname} {data.lastname}
                        </td>
                        <td className="ward">{data.wardnum}</td>
                        <td className="bed">{data.bednum}</td>
                        <td className="phoneNumber">{data.phone}</td>
                        <td className="registration">{data.reg}</td>                    
                    </tr>
            );
        });
      }

 
    


    renderNotice = () => {
        if(this.props.notice === null){
            return <></>
        }else if (!this.state.allNotice){
        return this.props.notice.slice(0,3).map(data => {
            
           if(data.noticefiles !== null){
            return (
                <div style={{fontSize:"1.6rem"}} key={data.id} className="ui segment">
                    <p style={{fontSize:"2rem"}} >{data.notice}</p>
                    <a href={data.noticefiles}><i class="file alternate outline icon" ></i>Attached File</a>
                    
                    
                </div>
    
    );
           }
          
            return (
                    <div style={{fontSize:"1.6rem"}} key={data.id} className="ui segment">
                        <p style={{fontSize:"2rem"}} >{data.notice}</p>
                    </div>
        
        );
    });}else if(this.state.allNotice) {
        return this.props.notice.map(data => {
              
           if(data.noticefiles !== null){
            return (
                <div style={{fontSize:"1.6rem"}} key={data.id} className="ui segment">
                    <p style={{fontSize:"2rem"}} >{data.notice}</p>
                    <a href={data.noticefiles}><i class="file alternate outline icon" ></i>Attached File</a>
                    
                    
                </div>
    
    );
           }
           
          
            return (
                    <div style={{fontSize:"1.6rem"}} key={data.id} className="ui segment">
                        <p style={{fontSize:"2rem"}} >{data.notice}</p>

                    </div>
        
        );
    });

    }
        
    }

    showNotice = () => {
        if(this.state.allNotice){
            this.setState({allNotice: false, notice:"Show All"});
          }else{
            this.setState({allNotice: true , notice:"Hide"});
          }
    }

    renderButton = () => {
        if (this.props.count > 3){
            return <button onClick={this.showNotice} className="btn btn--blue ">{this.state.notice}</button>
        }else {
            return <></>
        }
    }

    render(){
        return(
          <div ><Navbar/>
            <div className="dashboard">
                <h1 className="heading-secondary">Home</h1>
                <h3 className="heading-tertiary"> Notices</h3>
                {this.renderButton()}
                <div className="ui segments">{this.renderNotice()}
                </div>
                <table style={{backgroundColor:"white",borderRadius:"2rem"}} className=" ui selectable basic padded  table">
                    <thead><tr><th className="heading-tertiary">Ward Details</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ward Number</th>
                            <th>Bed Number</th>
                            <th>Phone Number</th>
                            <th>Registration Number</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                  
                </table>
            </div>
          </div>  
        );
    }
}

const mapStateToProps = state => {
    return {
      wards: Object.values(state.wards),
      notice: Object.values(state.notice),
      count: state.count
    };
  };
  
export default connect(
    mapStateToProps,
    { fetchWards , fetchNotices}
    
  )(Dashboard);
  
