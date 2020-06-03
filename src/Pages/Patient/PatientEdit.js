import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../Navbar'
import { fetchPatient} from '../../actions/patients';
import PatientForm from './PatientForm'
import {  editPatient } from '../../actions/patients';
import _ from 'lodash';

class PatientEdit extends React.Component {

    componentDidMount() {
        this.props.fetchPatient(this.props.match.params.id);
      }
    onSubmit = formValues => {
        this.props.editPatient(this.props.match.params.id, formValues);
      };
    render(){
          if (!this.props.patient) {
            return <div><Navbar/><div className="all">
            <h1  className="heading-secondary head" >Patient Edit</h1></div></div>;
          }else{
        
            return(
            <div><Navbar/>
              <div className='all'>
                 <h1  className="heading-secondary head">Patient Edit</h1>
                <PatientForm 
                initialValues={_.pick(this.props.patient, 'historyfiles', 'Physicalexamfiles', 'investigationfiles', 'reportsfiles', 'additionalfiles', 'fname', 'lname' ,"Contact","sex","Age","maritial_status","NID","registration","Cancer_id","occupation","address" ,"father",
                "mother",
                "Emergency1",
                "Emergency2",
                "Emergency3",
                "Weight",
                "Height",
                "BMI",
                "blood_groups",
                "Concomitant",
                "familyhistory",
                "familyhistoryofmalignancy",
                "personalhistory",
                "pasthistorydisease",
                "Drughistory",
                "Physicalexamfindings",
                "Casesummary",
                "diagnosis",
                "Investigation",
                "fnac",
                "histopathology",
                "ihc",
                "ctscan",
                "mri",
                "petct",
                "bonescan",
                "cbc",
                "pvf",
                "urineRE",
                "electrolyte",
                "rft",
                "lft",
                "xraychest",
                "ultrasound",
                "ENDOSCOPYofupperGIT",
                "COLONOSCOPY",
                "Nasopharyngoscopy",
                "fol",
                "papsmearcytology",
                "tumourmarker",
                "Bronchoscopy",
                "TSH",
                "ECG",
                "ECHO_CARDIOgraphy",
                "Bone_marrow_Study",
                "LDH",
                "SERUM_PROTEIN_ELECTROPHORESIS",
                "additionaltest",
                "staging",
                "grading",
                "Treatmentapproach",
                "additionaltreatment",
                "adjuvant",
                "new_adjuvant",
                "followup",
                "additionalinformation" )}
                onSubmit={this.onSubmit}/>
                </div>
            </div>  
        );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return { patient: state.patients[ownProps.match.params.id] };
  };
  export default connect(
    mapStateToProps, {fetchPatient, editPatient})(PatientEdit);