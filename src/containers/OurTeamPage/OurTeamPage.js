import React, { Component } from 'react';
import { connect } from 'react-redux';
import Heading from '../../components/UI/Heading/Heading'
import './OurTeamPage.css';
import TeamMember from '../../components/TeamMember/TeamMember';
import { teamActions } from '../../_actions/team.actions';


class OurTeamPage extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(teamActions.getTeam());
    }

    render() {
        return (
           <div className="container">
               <Heading>Our Team</Heading>
               {this.props.fetching ? <h5 className='text-center'>Loading...</h5> :
                    <div>
                        {this.props.teamMembers.map(stylist =>
                        <TeamMember src={stylist.image} alt={stylist.alt} name={stylist.name} 
                                    description={stylist.description} key={stylist.id}/>
                        )}
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { teamMembers, fetching } = state.team;
    return {
        teamMembers,
        fetching,
    };
}

const connectedOurTeamPage = connect(mapStateToProps)(OurTeamPage);

export { connectedOurTeamPage as OurTeamPage };


