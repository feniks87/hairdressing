import React, { Component } from 'react';
import { connect } from 'react-redux';

import {serviceActions} from '../../../_actions/service.actions';
import {teamActions} from '../../../_actions/team.actions';

import { WizardFormFirstPage } from '../../pageComponents/BookingPage/WizardFormFirstPage'
import { WizardFormSecondPage } from '../../pageComponents/BookingPage/WizardFormSecondPage'
import { WizardFormThirdPage } from '../../pageComponents/BookingPage/WizardFormThirdPage'

class BookingPage extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
          page: 1,
        };
      }

      
      onSubmit() {
        console.log('on submit');
        console.log(this.state);
      }

      nextPage(data, name) {
          this.setState((prevState, props) => ({
              ...prevState,
              page: this.state.page + 1,
              [name]: data,
          }));
          console.log(this.state);
      }
    
      previousPage(data, name) {
        this.setState((prevState, props) => ({
          ...prevState,
           page: this.state.page - 1,
           [name]: data,
          }));
      }

      componentDidMount() {
        const { dispatch } = this.props;
        dispatch(serviceActions.getAllServices());
        dispatch(teamActions.getTeam());
    }
    
      render() {
        const { page } = this.state;

        if (!this.props.services || this.props.services.length === 0 || !this.props.teamMembers || this.props.teamMembers.length === 0) {
          return null;
        }

        return (
          <div className="container">
            {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} data={this.state.services}/>}
            {page === 2 &&
              <WizardFormSecondPage
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
                data={this.state.stylist}
              />}
            {page === 3 &&
              <WizardFormThirdPage
                previousPage={this.previousPage}
                onSubmit={this.onSubmit}
              />}
          </div>
        );
      }
    }

const mapStateToProps = state => {
    const { authentication, servicesInfo, team } = state;
    const {services} = servicesInfo;
    const {teamMembers} = team;
    return {
        authentication,
        services,
        teamMembers
    };
}

const connectedBookingPage = connect(mapStateToProps)(BookingPage);

export { connectedBookingPage as BookingPage };



