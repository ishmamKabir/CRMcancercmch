import React from 'react';
import { connect } from 'react-redux';
import { fetchRoster } from '../../actions/roster';
import Navbar from '../Navbar'


class Roster extends React.Component {

    componentDidMount() {
        this.props.fetchRoster();
      }

    render(){
        return(
          <div><Navbar/>
          <div className="all">
          <h1 className="heading-secondary">Professor Roster</h1>
            <table style={{height:"86vh", backgroundColor:"white", borderRadius:"2rem"}}class="ui celled basic table">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>On Call</th>
                        <th>Round</th>
                        <th>Planning</th>
                        <th>Outdoor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td data-label="Day">Saturday</td>
                    <td data-label="On Call">{this.props.roster.oncallsaturday}</td>
                    <td data-label="Round">{this.props.roster.roundsaturday}</td>
                    <td data-label="Planning">{this.props.roster.planningsaturday}</td>
                    <td data-label="Outdoor">{this.props.roster.outdoorsaturday}</td>
                    </tr>
                    <tr>
                    <td data-label="Day">Sunday</td>
                    <td data-label="On Call">{this.props.roster.oncallsunday}</td>
                    <td data-label="Round">{this.props.roster.roundsunday}</td>
                    <td data-label="Planning">{this.props.roster.planningsunday}</td>
                    <td data-label="Outdoor">{this.props.roster.outdoorsunday}</td>
                    </tr>
                    <tr>
                    <td data-label="Day">Monday</td>
                    <td data-label="On Call">{this.props.roster.oncallmonday}</td>
                    <td data-label="Round">{this.props.roster.roundmonday}</td>
                    <td data-label="Planning">{this.props.roster.planningmonday}</td>
                    <td data-label="Outdoor">{this.props.roster.outdoormonday}</td>
                    </tr><tr>
                    <td data-label="Day">Tuesday</td>
                    <td data-label="On Call">{this.props.roster.oncalltuesday}</td>
                    <td data-label="Round">{this.props.roster.roundtuesday}</td>
                    <td data-label="Planning">{this.props.roster.planningtuesday}</td>
                    <td data-label="Outdoor">{this.props.roster.outdoortuesday}</td>
                    </tr>
                    <tr>
                    <td data-label="Day">Wednesday</td>
                    <td data-label="On Call">{this.props.roster.oncallwednesday}</td>
                    <td data-label="Round">{this.props.roster.roundwednesday}</td>
                    <td data-label="Planning">{this.props.roster.planningwednesday}</td>
                    <td data-label="Outdoor">{this.props.roster.outdoorwednesday}</td>
                    </tr>
                    <tr>
                    <td data-label="Day">Thursday</td>
                    <td data-label="On Call">{this.props.roster.oncallthursday}</td>
                    <td data-label="Round">{this.props.roster.roundthursday}</td>
                    <td data-label="Planning">{this.props.roster.planningthursday}</td>
                    <td data-label="Outdoor">{this.props.roster.outdoorthursday}</td>
                    </tr>
                </tbody>
            </table>
            </div>
           </div>
           
        );
    }
}

const mapStateToProps = state => {
    return { roster: state.roster };
  };
  
export default connect(
    mapStateToProps,
    { fetchRoster }
  )(Roster);
  