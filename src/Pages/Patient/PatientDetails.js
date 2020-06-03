import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../Navbar'
import { fetchPatient} from '../../actions/patients';
import history from '../../history';
import profileImg from '../kemptons-blank-profile-picture.jpg'



class PatientDetails extends React.Component {

  componentDidMount() {
    this.props.fetchPatient(this.props.match.params.id);
  }


  renderImg = () => {
    if(this.props.patient.patient_image !== null){
      let Link = `https://www.cancercmch.xyz/${this.props.staff.patient_image}`
      return <img src={Link} alt="profile"/>
    }else {
      return <img src={profileImg} alt='profile'/>
    }
  }

  renderFile = (file, text) => {
    if(file !== null){
      let Link = `https://www.cancercmch.xyz/${file}`
      return <p> <a style={{fontSize:"1.6rem"}}href={Link}><i class="file alternate outline icon" ></i>{text}</a></p>
    }
  }

    render(){
      if (!this.props.patient) {
        return <div><Navbar/>
        <div className='all'>
        <h1 className="heading-secondary">Patient Details</h1></div></div>;
      }
        return(
          <div><Navbar/>
            <div className="all">
            <div className="head">  
            <h1 className="heading-secondary">Patient Details</h1>
            <button  className= 'btn btn--white'  onClick={()=> history.push(`/patient/edit/${this.props.match.params.id}`)} >Edit</button>
            </div>
            <div className="personal--details">
              {this.renderImg()}
              <h2 className="heading-tertiary">Personal Information</h2>
              <p><label>First Name:</label> {this.props.patient.fname}</p> 
              <p><label>Last Name:</label> {this.props.patient.lname}</p>
              <p><label>Phone Number:</label> {this.props.patient.Contact}</p>
              <p><label>Gender:</label> {this.props.patient.sex}</p>
              <p><label>Age:</label> {this.props.patient.Age}</p>
              <p><label>NID Number:</label> {this.props.patient.NID}</p>
              <p><label>Registration Number:</label> {this.props.patient.registration}</p>
              <p><label>Marital Status:</label> {this.props.patient.maritial_status}</p>
              <p><label>Cancer ID:</label> {this.props.patient.Cancer_id}</p>
            </div>
            <div className="medical--details">
              <div className="medical--details__segment">
              <h2  className="heading-tertiary" >Personal Information</h2>
              <p><label>Occupation:</label> {this.props.patient.occupation}</p>
              <p><label>Address:</label> {this.props.patient.address}</p>
              </div>
              <div className="medical--details__segment">
              <h2  className="heading-tertiary" >Family Information</h2>
              <p><label>Father's Name:</label> {this.props.patient.father}</p>
              <p><label>Mother's Name:</label> {this.props.patient.mother}</p>
              <p><label>Emergency Contact:</label> {this.props.patient.Emergency1} {this.props.patient.Emergency2} {this.props.patient.Emergency3}</p>
              </div>
              <div className="medical--details__segment">
              <h2  className="heading-tertiary">Medical Information</h2>
              <p><label>Weight:</label> {this.props.patient.Weight}</p>
              <p><label>Height:</label> {this.props.patient.Height}</p>
              <p><label>BMI:</label> {this.props.patient.BMI}</p>
              <p><label>Blood Group:</label> {this.props.patient.blood_groups}</p>
              <p><label>Concomitant:</label> {this.props.patient.Concomitant}</p>
              <p><label>Family History:</label> {this.props.patient.familyhistory}</p>
              {this.renderFile(this.props.patient.historyfiles, "Family History File")}
              <p><label>Family History of Malignancy:</label> {this.props.patient.familyhistoryofmalignancy}</p>
              <p><label>Personal History:</label> {this.props.patient.personalhistory}</p>
              <p><label>Past Disease History:</label> {this.props.patient.pasthistorydisease}</p>
              <p><label>Drug History:</label> {this.props.patient.Drughistory}</p>
              <p><label>Physical Exam Findings:</label> {this.props.patient.Physicalexamfindings}</p>
              {this.renderFile(this.props.patient.physicalexamfiles, "Physical Exam Findings File")}
              <p><label>Case Summary:</label> {this.props.patient.Casesummary}</p>
              <p><label>Diagnosis:</label> {this.props.patient.diagnosis}</p>
              </div>
              <div className="medical--details__segment">
              <h2  className="heading-tertiary">Investigation</h2>
              <p><label>Investigation:</label> {this.props.patient.Investigation}</p>
              {this.renderFile(this.props.patient.investigationfiles, "Investigation File")}
              <p><label>FNAC:</label> {this.props.patient.fnac}</p>
              <div className="medical--details__subSegment">
              <h2>Histopathology</h2>
              <p><label>Histopathology:</label> {this.props.patient.histopathology}</p>
              <p><label>IHC:</label> {this.props.patient.ihc}</p>
              </div>
              <p><label>CT-Scan:</label> {this.props.patient.ctscan}</p>
              <p><label>MRI:</label> {this.props.patient.mri}</p>
              <p><label>PET-CT:</label> {this.props.patient.petct}</p>
              <p><label>Bone Scan:</label> {this.props.patient.bonescan}</p>
              <p><label>CBC:</label> {this.props.patient.cbc}</p>
              <p><label>PVF:</label> {this.props.patient.pvf}</p>
              <p><label>Urine RE:</label> {this.props.patient.urineRE}</p>
              <p><label>Electrolyte:</label> {this.props.patient.electrolyte}</p>
              <p><label>RFT:</label> {this.props.patient.rft}</p>
              <p><label>LFT:</label> {this.props.patient.lft}</p>
              <p><label>X-ray Chest:</label> {this.props.patient.xraychest}</p>
              <p><label>Ultrasound:</label> {this.props.patient.ultrasound}</p>
              <p><label>Endoscopy of Upper GIT:</label> {this.props.patient.ENDOSCOPYofupperGIT}</p>
              <p><label>Colonoscopy:</label> {this.props.patient.COLONOSCOPY}</p>
              <p><label>Nasopharyngoscopy:</label> {this.props.patient.Nasopharyngoscopy}</p>
              <p><label>Bronchoscopy:</label> {this.props.patient.Bronchoscopy}</p>
              <p><label>FOL:</label> {this.props.patient.fol}</p>
              <p><label>Pap Smear Cytology:</label> {this.props.patient.papsmearcytology}</p>
              <p><label>Tumour Marker:</label> {this.props.patient.tumourmarker}</p>
              <p><label>TSH:</label> {this.props.patient.TSH}</p>
              <p><label>ECG:</label> {this.props.patient.ECG}</p>
              <p><label>Echo Cardio Graphy:</label> {this.props.patient.ECHO_CARDIOgraphy}</p>
              <p><label>Bone Marrow Study:</label> {this.props.patient.Bone_marrow_Study}</p>
              <p><label>LDH:</label> {this.props.patient.LDH}</p>
              <p><label>Serum Protein Electrophoresis:</label> {this.props.patient.SERUM_PROTEIN_ELECTROPHORESIS}</p>
              <p><label>Additional Test:</label> {this.props.patient.additionaltest}</p>  
              </div>
              <div className="medical--details__segment">
              <p><label>Stage:</label> {this.props.patient.staging}</p>  
              <p><label>Grade:</label> {this.props.patient.grading}</p>  
              <p><label>Treatment Approach:</label> {this.props.patient.Treatmentapproach}</p>  
              <p><label>Adjuvant:</label> {this.props.patient.adjuvant}</p>  
              <p><label>New Adjuvant:</label> {this.props.patient.new_adjuvant}</p>  
              <p><label>Follow Up:</label> {this.props.patient.followup}</p>  
              <p><label>Additional Information:</label> {this.props.patient.additionalinformation}</p>  
              {this.renderFile(this.props.patient.reportsfiles, "Report File")}
              {this.renderFile(this.props.patient.additionalfiles, "Additional File")}
              </div>
              </div>  
              </div>
          </div>  
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return { patient: state.patients[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps, {fetchPatient})(PatientDetails);