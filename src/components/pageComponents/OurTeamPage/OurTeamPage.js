import React, { Component } from 'react';
import { connect } from 'react-redux';
import Heading from '../../UI/Heading/Heading'
import './OurTeamPage.css';
import TeamMember from '../../pageComponents/OurTeamPage/TeamMember/TeamMember';
import { teamActions } from '../../../_actions/team.actions';


class OurTeamPage extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(teamActions.getTeam());
    }

    render() {
        const teamMembers = this.props.teamMembers;

        if (!teamMembers) { return null; }

        return (
            <div className="container">
                <Heading>Our Team</Heading>
                {teamMembers.map(stylist =>
                    <TeamMember src={stylist.image} alt={stylist.alt} name={stylist.name}
                                description={stylist.description} key={stylist.id}/>
                )}

            </div>
        )
    }
}

function mapStateToProps(state) {
    const { teamMembers, fetching } = state.team;
    return {
        teamMembers: teamMembers,
        fetching: fetching,
    };
}

const connectedOurTeamPage = connect(mapStateToProps)(OurTeamPage);

export { connectedOurTeamPage as OurTeamPage };