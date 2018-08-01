
import React, { Component } from 'react';

import { connect } from 'react-redux';

import Heading from '../../UI/Heading/Heading';

import { ListGroup } from 'reactstrap';

import ListItem from '../../UI/ListItem/ListItem';

import {teamActions} from '../../../_actions/team.actions';

import Button from '../../UI/Button/Button';

class WizardFormSecondPage extends Component {

    constructor(props) {
        super(props);       
        this.state = {
          selectedStylists: [],
        };

        this.toggleStylist = this.toggleStylist.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

      
    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(teamActions.getTeam());
  }

    toggleStylist(stylistId) {
        if (this.state.selectedStylists.includes(stylistId)) {
            this.setState((prevState, props) => ({
              selectedStylists: prevState.selectedStylists.filter(id => id !== stylistId),
              }));
        }
        else {
            this.setState((prevState, props) => ({
              selectedStylists: [...prevState.selectedStylists, stylistId],
              }));
        }
    }

    onSubmit(e) {
      e.preventDefault();
      this.props.onSubmit(this.state.selectedStylists, 'stylists')
  }

    render() {

      const team = this.props.teamMembers;
        if (!team) { return null; }
        return (
            <div className="container ">
                <Heading>Choose stylist</Heading>
                <form onSubmit={(e) => this.onSubmit(e)}>
                  <ListGroup>
                      {team.map(stylist =>
                          <ListItem itemId={stylist.id} 
                          selected={this.state.selectedStylists.includes(stylist.id)}
                          onClick={this.toggleStylist}
                          key={stylist.id}
                          >{stylist.name}</ListItem>
                      )}
                  </ListGroup>
                    <div>
                        <Button type="submit">Next</Button>
                    </div>
                </form>
        </div>
    );
  }
}

function mapStateToProps(state) {
    const { teamMembers, fetching } = state.team;
    return {
      teamMembers: teamMembers,
        fetching: fetching,
    };
}

const connectedWizardFormSecondPage = connect(mapStateToProps)(WizardFormSecondPage);

export { connectedWizardFormSecondPage as WizardFormSecondPage };