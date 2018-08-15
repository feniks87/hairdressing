import React, { Component } from 'react';
import { connect } from 'react-redux';
import Heading from '../../components/UI/Heading/Heading';
import './ContactPage.css'
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import { Hours } from '../../components/Hours/Hours';
import { contactActions } from '../../_actions/contact.actions';
import { hoursActions } from '../../_actions/hours.actions';


class ContactPage extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(contactActions.getContacts());
        dispatch(hoursActions.getAllWorkingHours());
    }

    render() {
        const contacts = this.props.contacts;

        return (
            <div className="container">
                <Heading>Contact Us</Heading>
                {this.props.fetching && contacts.length === 0 ? <h5 className='text-center'>Loading...</h5> :
                <div>
                    {contacts.map(contactInfo =>
                        <div className="row" key={contactInfo.id}>
                            <div className="col-sm-6">
                                <ContactInfo name={contactInfo.name} address={contactInfo.address} phone={contactInfo.phone}/>
                                <img className="Image-map img-fluid img-thumbnail"
                                    src={`data:image/jpeg;base64,${contactInfo.mapImage}`}
                                    alt={contactInfo.alt}/>
                            </div>
                            <div className="col-sm-6">
                                <h5 className="Heading-hours text-center">Hours</h5>
                                <Hours locationId={contactInfo.id} />
                            </div>
                        </div>
                    )}
                </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { contacts, fetching } = state.contactsInfo;
    return {
        contacts: contacts,
        fetching: fetching,
    };
}

const connectedContactPage = connect(mapStateToProps)(ContactPage);

export { connectedContactPage as ContactPage };