import React, { Component } from 'react';
import { connect } from 'react-redux';

import {alertActions} from '../../../_actions/alert.actions';

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
          console.log(name);
          console.log(data);
          this.setState((prevState, props) => ({
              ...prevState,
              page: this.state.page + 1,
              [name]: data,
          }));
          console.log(this.state);
      }
    
      previousPage() {
        this.setState({ page: this.state.page - 1 });
      }
    
      render() {
        const { page } = this.state;

        if (!this.props.authentication.loggedIn) {
            this.props.history.replace('/login');
            const { dispatch } = this.props;
            dispatch(alertActions.unauthorized('Please log in to book online.'));
        }

        return (
          <div className="container">
            {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
            {page === 2 &&
              <WizardFormSecondPage
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
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
    const { authentication } = state;
    return {
        authentication
    };
}

const connectedBookingPage = connect(mapStateToProps)(BookingPage);

export { connectedBookingPage as BookingPage };



