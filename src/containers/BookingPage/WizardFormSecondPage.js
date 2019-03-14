
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/UI/Header/Header';
import { ListGroup } from 'reactstrap';
import SelectableListItem from '../../components/UI/SelectableListItem/SelectableListItem';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

class WizardFormSecondPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStylist: props.data ? props.data : ((props.team.teamMembers && props.team.teamMembers.length > 0) ? props.team.teamMembers[0].id : null),
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.state.selectedStylist && !this.props.team.fetching) {
            this.setState({
                selectedStylist: this.props.team.teamMembers[0].id,
            });
        }
    }

    back() {
        this.props.previousPage(this.state.selectedStylist, 'stylist');
    }

    render() {
        const team = this.props.team.teamMembers;
        return (
            <div className="Form">
                <Header>Select stylist</Header>
                {(this.props.team.fetching
                    || this.props.workingHours.fetching
                    || this.props.contactsInfo.fetching
                    || this.props.bookingInfo.fetching) && (team.length === 0) ? <Spinner /> :
                <form className="Wrapper" onSubmit={(e) => this.onSubmit(e)}>
                    <ListGroup>
                        {team.map(stylist =>
                            <SelectableListItem itemId={stylist.id}
                                      selected={this.state.selectedStylist === stylist.id}
                                      onClick={this.toggleStylist}
                                      key={stylist.id}
                            >{stylist.name}</SelectableListItem>
                        )}
                    </ListGroup>
                    <div>
                        <Button type="submit">Next</Button>
                        <Button type="button" onClick={this.back}>Back</Button>
                    </div>
                </form>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        team: state.team,
        workingHours: state.workingHours,
        contactsInfo: state.contactsInfo,
        bookingInfo: state.bookingInfo,
    };
}

const connectedWizardFormSecondPage = connect(mapStateToProps)(WizardFormSecondPage);

export { connectedWizardFormSecondPage as WizardFormSecondPage };