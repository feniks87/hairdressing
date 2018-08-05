
import React, { Component } from 'react';

import { connect } from 'react-redux';

import Heading from '../../UI/Heading/Heading';

import { ListGroup } from 'reactstrap';

import ListItem from '../../UI/ListItem/ListItem';

import Button from '../../UI/Button/Button';

class WizardFormSecondPage extends Component {

    constructor(props) {
        super(props);

        let value = null;

        if (props.data) {
            value = props.data;
        }
        else {
            if (props.teamMembers && props.teamMembers.length > 0) {
                value = props.teamMembers[0].id;
            }
        }
        this.state = {
            selectedStylist: value,
        };

        this.toggleStylist = this.toggleStylist.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.back = this.back.bind(this);
    }

    toggleStylist(stylistId) {
        // if user clicks on a stylist which is not selected yet, change selection
        // otherwise ignore
        if (this.state.selectedStylist !== stylistId) {
            this.setState({selectedStylist: stylistId});
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.selectedStylist, 'stylist');
    }

    back() {
        this.props.previousPage(this.state.selectedStylist, 'stylist');
    }

    render() {
        const team = this.props.teamMembers;
        if (!team) { return null; }
        return (
            <div className="Form">
                <Heading>Choose stylist</Heading>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <ListGroup>
                        {team.map(stylist =>
                            <ListItem itemId={stylist.id}
                                      selected={this.state.selectedStylist === stylist.id}
                                      onClick={this.toggleStylist}
                                      key={stylist.id}
                            >{stylist.name}</ListItem>
                        )}
                    </ListGroup>
                    <div>
                        <Button type="submit">Next</Button>
                        <Button type="button" onClick={this.back}>Back</Button>
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