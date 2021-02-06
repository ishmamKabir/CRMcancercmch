import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';
import logo from './chittagong-medical-college-hospital-cmch-logo-0387EE353D-seeklogo.com.png';

class Navbar extends React.Component {
	handleInput = () => {
		this.props.logout();
	};

	render() {
		return (
			<div className='wrapper'>
				<div className='sidebar'>
					<img src={logo} alt='logo' />
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/patient/list'>Patient List</Link>
						</li>
						<li>
							<Link to='/ward/details'>Ward Details</Link>
						</li>
						<li>
							<Link to='/doctor/list'>Doctor List</Link>
						</li>
						<li>
							<Link to='/roster/'>Professor Roster</Link>
						</li>
						<li>
							<Link to='/staff/list'>Staff List</Link>
						</li>
					</ul>

					<div className='social_media'>
						<li onClick={this.handleInput} className='a'>
							<i className='sign out icon' /> LOGOUT
						</li>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, { logout })(Navbar);
