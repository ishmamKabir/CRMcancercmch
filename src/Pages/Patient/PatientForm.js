import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PatientForm extends React.Component {
	state = {
		image: null,
		historyFiles: null,
		physicalexamFiles: null,
		investigationFiles: null,
		reportsFiles: null,
		additionalFiles: null
	};
	renderError({ error, touched }) {
		if (touched && error) {
			return <div className='ui error message' />;
		}
	}

	renderInput = ({ input, meta, type, placeholder, required }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<input
					type={type}
					placeholder={placeholder}
					{...input}
					{...required}
					style={{ marginRight: '1%', marginBottom: '.25%', marginTop: '1%' }}
					autoComplete='off'
				/>
				{this.renderError(meta)}
			</div>
		);
	};
	renderTextarea = ({ input, meta, rows, placeholder, value }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<textarea rows={rows} placeholder={placeholder} value={value} {...input} autoComplete='off' />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		let patient_form = new FormData();
		if (this.state.image !== null) {
			patient_form.append('patient_image', this.state.image, this.state.image.name);
		}
		if (this.state.historyFiles !== null) {
			patient_form.append('historyfiles', this.state.historyFiles, this.state.historyFiles.name);
		}
		if (this.state.physicalexamFiles !== null) {
			patient_form.append('physicalexamFiles', this.state.physicalexamFiles, this.state.physicalexamFiles.name);
		}
		if (this.state.investigationFiles !== null) {
			patient_form.append(
				'investigationfiles',
				this.state.investigationFiles,
				this.state.investigationFiles.name
			);
		}
		if (this.state.reportsFiles !== null) {
			patient_form.append('reportfiles', this.state.reportsFiles, this.state.reportsFiles.name);
		}
		if (this.state.additionalFiles !== null) {
			patient_form.append('additionalfiles', this.state.additionalFiles, this.state.additionalFiles.name);
		}
		patient_form.append('fname', formValues.fname);
		patient_form.append('lname', formValues.lname);
		patient_form.append('Contact', formValues.Contact);
		patient_form.append('registration', formValues.registration);
		if (formValues.NID !== undefined || formValues.NID !== null) {
			patient_form.append('NID', formValues.NID);
		}
		patient_form.append('NID', '');
		patient_form.append('Cancer_id', formValues.Cancer_id);
		patient_form.append('mother', formValues.mother);
		patient_form.append('father', formValues.father);
		patient_form.append('address', formValues.address);
		if (formValues.Emergency !== undefined || formValues.Emergency !== null) {
			patient_form.append('Emergency', formValues.Emergency);
		}
		patient_form.append('Emergency', '');
		patient_form.append('Age', formValues.Age);
		patient_form.append('sex', formValues.sex);
		patient_form.append('maritial_status', formValues.maritial_status);
		patient_form.append('occupation', formValues.occupation);
		if (formValues.blood_groups !== undefined || formValues.blood_groups !== null) {
			patient_form.append('blood_groups', formValues.blood_groups);
		}
		patient_form.append('blood_groups', '');
		if (formValues.Weight !== undefined || formValues.Weight !== null) {
			patient_form.append('Weight', formValues.Weight);
		}
		patient_form.append('Weight', '');
		if (formValues.Height !== undefined || formValues.Height !== null) {
			patient_form.append('Height', formValues.Height);
		}
		patient_form.append('Height', '');
		if (formValues.BMI !== undefined || formValues.BMI !== null) {
			patient_form.append('BMI', formValues.BMI);
		}
		patient_form.append('BMI', '');
		patient_form.append('Concomitant', formValues.Concomitant);
		patient_form.append('familyhistory', formValues.familyhistory);
		patient_form.append('familyhistoryofmalignancy', formValues.familyhistoryofmalignancy);
		patient_form.append('personalhistory', formValues.personalhistory);
		patient_form.append('pasthistorydisease', formValues.pasthistorydisease);
		patient_form.append('Drughistory', formValues.Drughistory);
		patient_form.append('Physicalexamfindings', formValues.Physicalexamfindings);
		patient_form.append('Casesummary', formValues.Casesummary);
		patient_form.append('diagnosis', formValues.diagnosis);
		patient_form.append('Investigation', formValues.Investigation);
		patient_form.append('fnac', formValues.fnac);
		patient_form.append('histopathology', formValues.histopathology);
		patient_form.append('ihc', formValues.ihc);
		patient_form.append('ctscan', formValues.ctscan);
		patient_form.append('mri', formValues.mri);
		patient_form.append('petct', formValues.petct);
		patient_form.append('bonescan', formValues.bonescan);
		patient_form.append('cbc', formValues.cbc);
		patient_form.append('pvf', formValues.pvf);
		patient_form.append('urineRE', formValues.urineRE);
		patient_form.append('electrolyte', formValues.electrolyte);
		patient_form.append('rft', formValues.rft);
		patient_form.append('lft', formValues.lft);
		patient_form.append('xraychest', formValues.xraychest);
		patient_form.append('ultrasound', formValues.ultrasound);
		patient_form.append('ENDOSCOPYofupperGIT', formValues.ENDOSCOPYofupperGIT);
		patient_form.append('COLONOSCOPY', formValues.COLONOSCOPY);
		patient_form.append('Nasopharyngoscopy', formValues.Nasopharyngoscopy);
		patient_form.append('Bronchoscopy', formValues.Bronchoscopy);
		patient_form.append('fol', formValues.fol);
		patient_form.append('papsmearcytology', formValues.papsmearcytology);
		patient_form.append('tumourmarker', formValues.tumourmarker);
		patient_form.append('TSH', formValues.TSH);
		patient_form.append('ECG', formValues.ECG);
		patient_form.append('echo_cardiography', formValues.echo_cardiography);
		patient_form.append('Bone_marrow_Study', formValues.Bone_marrow_Study);
		patient_form.append('LDH', formValues.LDH);
		patient_form.append('SERUM_PROTEIN_ELECTROPHORESIS', formValues.SERUM_PROTEIN_ELECTROPHORESIS);
		patient_form.append('additionaltest', formValues.additionaltest);
		if (formValues.grading !== undefined || formValues.grading !== null) {
			patient_form.append('grading', formValues.grading);
		}
		patient_form.append('grading', '');
		if (formValues.staging !== undefined || formValues.staging !== null) {
			patient_form.append('staging', formValues.staging);
		}
		patient_form.append('staging', '');
		if (formValues.Treatmentapproach !== undefined || formValues.Treatmentapproach !== null) {
			patient_form.append('Treatmentapproach', formValues.Treatmentapproach);
		}
		patient_form.append('Treatmentapproach', '');
		patient_form.append('additionaltreatment', formValues.additionaltreatment);
		patient_form.append('adjuvant', formValues.adjuvant);
		patient_form.append('new_adjuvant', formValues.new_adjuvant);
		patient_form.append('followup', formValues.followup);
		patient_form.append('additionalinformation', formValues.additionalinformation);
		for (var pair of patient_form.entries()) {
			if (pair[1] === 'undefined' || pair[1] === 'null') {
				patient_form.set(pair[0], '');
			}
		}
		this.props.onSubmit(patient_form);
	};

	renderForm = () => {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
				<div className='personal--form'>
					<h3 className='heading-tertiary'>Personal Information</h3>
					<p>
						Profile Image<input
							name='patient_image'
							type='file'
							id='image'
							accept='image/*'
							onChange={(e) => this.setState({ image: e.target.files[0] })}
						/>
					</p>

					<Field name='fname' component={this.renderInput} type='text' placeholder='First Name' />
					<Field name='lname' component={this.renderInput} type='text' placeholder='Last Name' />

					<Field name='Contact' component={this.renderInput} type='tel' placeholder='Phone Number' />
					<div class='field'>
						<Field name='sex' component='select' >
							<option value=''>Gender</option>
							<option value='Male'>Male</option>
							<option value='Female'>Female</option>
							<option value='Other'>Other</option>
						</Field>
					</div>
					<Field name='Age' component={this.renderInput} type='number' placeholder='Age' />
					<div class='field'>
						<Field name='maritial_status' component='select'>
							<option value=''>Marital Status</option>
							<option value='Married'>Married</option>
							<option value='Unmarried'>Unmarried</option>
						</Field>
					</div>
					<Field name='NID' component={this.renderInput} type='text' placeholder='NID Number' />
					<Field
						name='registration'
						component={this.renderInput}
						type='text'
						placeholder='Registration Number'
					/>
					<Field name='Cancer_id' component={this.renderInput} type='text' placeholder='Cancer ID' />
				</div>
				<div className='medical--form'>
					<h3 className='heading-tertiary'>Personal Information</h3>
					<Field name='occupation' component={this.renderTextarea} rows='2' placeholder='Occupation' />
					<Field name='address' component={this.renderTextarea} rows='3' placeholder='Address' />
					<h3 className='heading-tertiary'>Family Information</h3>
					<div className='two fields'>
						<Field name='father' component={this.renderInput} type='text' placeholder='Father&#39;s Name' />
						<Field name='mother' component={this.renderInput} type='text' placeholder='Mother&#39;s Name' />
					</div>
					<Field name='Emergency' component={this.renderInput} type='number' placeholder='Emergency Number' />

					<h3 className='heading-tertiary'>Medical Information</h3>
					<div className='two fields'>
						<Field name='Weight' component={this.renderInput} type='text' placeholder='Weight in kg' />
						<Field
							name='Height'
							component={this.renderInput}
							type='text'
							placeholder='Height in ft and inch  '
						/>
					</div>
					<Field name='BMI' component={this.renderInput} type='number' placeholder='BMI' />
					<div className=' fields'>
						<label className='label'>Blood Group:</label>
						<Field name='blood_groups' component={this.renderInput} type='radio' value='A+' />
						<label>A+</label>
						<Field name='blood_groups' component={this.renderInput} type='radio' value='A-' />
						<label>A-</label>
						<Field name='blood_groups' component={this.renderInput} type='radio' value='B+' />
						<label>B+</label>
						<Field name='blood_groups' component={this.renderInput} type='radio' value='B-' />
						<label>B-</label>
						<Field name='blood_groups' component={this.renderInput} type='radio' value='O+' />
						<label>O+</label>
						<Field name='blood_groups' component={this.renderInput} type='radio' value='O-' />
						<label>O-</label>
						<Field name='blood_groups' component={this.renderInput} type='radio' value='AB+' />
						<label>AB+</label>
						<Field name='blood_groups' component={this.renderInput} type='radio' value='AB-' />
						<label>AB-</label>
					</div>
					<Field
						name='Concomitant'
						component={this.renderTextarea}
						rows='5'
						placeholder='Concomitant Diseases'
					/>
					<Field
						name='familyhistory'
						component={this.renderTextarea}
						rows='5'
						placeholder='Family Medical History'
					/>
					<p>
						Family Medical History File<input
							name='historyfiles'
							type='file'
							id='historyfiles'
							onChange={(e) => this.setState({ historyFiles: e.target.files[0] })}
						/>
					</p>
					<Field
						name='familyhistoryofmalignancy'
						component={this.renderTextarea}
						rows='5'
						placeholder='Family History of Malignancy'
					/>
					<Field
						name='personalhistory'
						component={this.renderTextarea}
						rows='5'
						placeholder='Personal Medical History'
					/>
					<Field
						name='pasthistorydisease'
						component={this.renderTextarea}
						rows='5'
						placeholder='Past Disease History'
					/>
					<Field name='Drughistory' component={this.renderTextarea} rows='5' placeholder='Drug History' />
					<Field
						name='Physicalexamfindings'
						component={this.renderTextarea}
						rows='6'
						placeholder='Physical Exam Findings'
					/>
					<p>
						Physical Exam Findings File<input
							name='physicalexamfiles'
							type='file'
							id='physicalexamfiles'
							onChange={(e) => this.setState({ physicalexamFiles: e.target.files[0] })}
						/>
					</p>
					<Field name='Casesummary' component={this.renderTextarea} rows='8' placeholder='Case Summary' />
					<Field name='diagnosis' component={this.renderTextarea} rows='5' placeholder='Diagnosis' />
					<h1>Investigation</h1>
					<Field name='Investigation' component={this.renderTextarea} rows='6' placeholder='Investigation' />
					<p>
						Investigation File<input
							name='investigationfiles'
							type='file'
							id='investigationfiles'
							onChange={(e) => this.setState({ investigationFiles: e.target.files[0] })}
						/>
					</p>
					<Field name='fnac' component={this.renderTextarea} rows='4' placeholder='FNAC' />
					<div className='medical--form__subSegment'>
						<h2>Histopathology</h2>
						<Field
							name='histopathology'
							component={this.renderTextarea}
							rows='4'
							placeholder='Histopathology'
						/>
						<Field name='ihc' component={this.renderTextarea} rows='4' placeholder='IHC' />
					</div>
					<Field name='ctscan' component={this.renderTextarea} rows='4' placeholder='CT Scan' />
					<Field name='mri' component={this.renderTextarea} rows='4' placeholder='MRI' />
					<Field name='petct' component={this.renderTextarea} rows='4' placeholder='PET-CT' />
					<Field name='bonescan' component={this.renderTextarea} rows='4' placeholder='Bone Scan' />
					<Field name='cbc' component={this.renderTextarea} rows='4' placeholder='CBC' />
					<Field name='pvf' component={this.renderTextarea} rows='4' placeholder='PVF' />
					<Field name='urineRE' component={this.renderTextarea} rows='4' placeholder='Urine RE' />
					<Field name='electrolyte' component={this.renderTextarea} rows='4' placeholder='Electrolyte' />
					<Field name='rft' component={this.renderTextarea} rows='4' placeholder='RFT' />
					<Field name='lft' component={this.renderTextarea} rows='5' placeholder='LFT' />
					<Field name='xraychest' component={this.renderTextarea} rows='4' placeholder='X-ray Chest' />
					<Field name='ultrasound' component={this.renderTextarea} rows='4' placeholder='Ultrasound' />
					<Field
						name='ENDOSCOPYofupperGIT'
						component={this.renderTextarea}
						rows='4'
						placeholder='Endoscopy of Upper GIT'
					/>
					<Field name='COLONOSCOPY' component={this.renderTextarea} rows='4' placeholder='Colonoscopy' />
					<Field
						name='Nasopharyngoscopy'
						component={this.renderTextarea}
						rows='4'
						placeholder='Nasopharyngoscopy'
					/>
					<Field name='Bronchoscopy' component={this.renderTextarea} rows='4' placeholder='Bronchoscopy' />
					<Field name='fol' component={this.renderTextarea} rows='4' placeholder='FOL' />
					<Field
						name='papsmearcytology'
						component={this.renderTextarea}
						rows='4'
						placeholder='Pap Smear Cytology'
					/>
					<Field name='tumourmarker' component={this.renderTextarea} rows='4' placeholder='Tumour Marker' />
					<Field name='TSH' component={this.renderTextarea} rows='4' placeholder='TSH' />
					<Field name='ECG' component={this.renderTextarea} rows='4' placeholder='ECG' />
					<Field
						name='ECHO_CARDIOgraphy'
						component={this.renderTextarea}
						rows='4'
						placeholder='Echocardiography'
					/>
					<Field
						name='Bone_marrow_Study'
						component={this.renderTextarea}
						rows='4'
						placeholder='Bone Marrow Study'
					/>
					<Field name='LDH' component={this.renderTextarea} rows='4' placeholder='LDH' />
					<Field
						name='SERUM_PROTEIN_ELECTROPHORESIS'
						component={this.renderTextarea}
						rows='4'
						placeholder='Serum Protein Electrophoresis'
					/>
					<Field
						name='additionaltest'
						component={this.renderTextarea}
						rows='4'
						placeholder='Additional Test'
					/>

					<div className=' fields'>
						<label className='label'>Staging:</label>
						<Field name='staging' component={this.renderInput} type='radio' value='1' />
						<label>I</label>
						<Field name='staging' component={this.renderInput} type='radio' value='2' />
						<label>II</label>
						<Field name='staging' component={this.renderInput} type='radio' value='3' />
						<label>III</label>
						<Field name='staging' component={this.renderInput} type='radio' value='4' />
						<label>IV</label>
					</div>
					<div className=' fields'>
						<label className='label'>Grading:</label>
						<Field name='grading' component={this.renderInput} type='radio' value='1' />
						<label>I</label>
						<Field name='grading' component={this.renderInput} type='radio' value='2' />
						<label>II</label>
						<Field name='grading' component={this.renderInput} type='radio' value='3' />
						<label>III</label>
					</div>

					<p>Treatment Approach:</p>
					<div className=' fields'>
						<label className='label'>Curative:</label>
						<Field name='Treatmentapproach' component={this.renderInput} type='radio' value='surgery' />
						<label>Surgery</label>
						<Field
							name='Treatmentapproach'
							component={this.renderInput}
							type='radio'
							value='chemotherapy'
						/>
						<label>Chemotherapy</label>
						<Field
							name='Treatmentapproach'
							component={this.renderInput}
							type='radio'
							value='immunotherapy'
						/>
						<label>Immunotherapy</label>
						<Field name='Treatmentapproach' component={this.renderInput} type='radio' value='hormone' />
						<label>Hormone Therapy</label>
						<Field name='Treatmentapproach' component={this.renderInput} type='radio' value='other' />
						<label>Other</label>
					</div>
					<div className=' fields'>
						<label className='label'>Palliative:</label>
						<Field
							name='Treatmentapproach'
							component={this.renderInput}
							type='radio'
							value='chemotherapy'
						/>
						<label>Chemotherapy</label>
						<Field
							name='Treatmentapproach'
							component={this.renderInput}
							type='radio'
							value='immunotherapy'
						/>
						<label>Immunotherapy</label>
						<Field name='Treatmentapproach' component={this.renderInput} type='radio' value='hormone' />
						<label>Hormone Therapy</label>
						<Field name='Treatmentapproach' component={this.renderInput} type='radio' value='other' />
						<label>Other</label>
					</div>
					<div className=' fields'>
						<label className='label'>Other:</label>
						<Field name='Treatmentapproach' component={this.renderInput} type='radio' value='other' />
						<label>Other</label>
					</div>
					<Field
						name='additionaltreatment'
						component={this.renderTextarea}
						rows='6'
						placeholder='Additional Treatment'
					/>
					<Field name='adjuvant' component={this.renderTextarea} rows='6' placeholder='Adjuvant' />
					<Field name='new_adjuvant' component={this.renderTextarea} rows='6' placeholder='New Adjuvant' />
					<Field name='followup' component={this.renderTextarea} rows='7' placeholder='Follow Up' />
					<Field
						name='additionalinformation'
						component={this.renderTextarea}
						rows='8'
						placeholder='Additional Information'
					/>
					<p>
						Report File<input
							name='reportsfiles'
							type='file'
							id='reportsfiles'
							onChange={(e) => this.setState({ reportsFiles: e.target.files[0] })}
						/>
					</p>
					<p>
						Additional File<input
							name='additionalfiles'
							type='file'
							id='additionalfiles'
							onChange={(e) => this.setState({ additionalFiles: e.target.files[0] })}
						/>
					</p>
					<button className='btn btn--blue'>Submit</button>
				</div>
			</form>
		);
	};

	render() {
		return <div>{this.renderForm()}</div>;
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.fname) {
		errors.fname = 'You must enter a First Name';
	}

	if (!formValues.lname) {
		errors.lname = 'You must enter a Last Name';
	}

	if (!formValues.registration) {
		errors.registration = 'You must enter a Registration Number';
	}
	if (!formValues.address) {
		errors.address = 'You must enter an Address';
	}
	if (!formValues.Contact) {
		errors.Contact = 'You must enter a Phone Number';
	}
	if (!formValues.lname) {
		errors.lname = 'You must enter a Last Name';
	}
	if (!formValues.Age) {
		errors.Age = 'You must enter an Age';
	}
	if (!formValues.sex) {
		errors.sex = 'You must select a Gender';
	}
	if (!formValues.maritial_status) {
		errors.maritial_status = 'You must select a Marital Status';
	}

	if (!formValues.Cancer_id) {
		errors.Cancer_id = 'You must enter a Cancer ID';
	}

	return errors;
};

export default reduxForm({
	form: 'patientForm',
	validate
})(PatientForm);
