import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Footer.css';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import { contactActions } from '../../_actions/contact.actions';


class Footer extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(contactActions.getContacts());
    }

    render() {

        const contacts = this.props.contacts;
        if (!contacts) { return null; }

        return (
            <footer className="Footer mb-2 text-muted">
                <div className="container">
                    <div className="row">
                        {contacts.map(contactInfo =>
                            <div className="col-sm-12" key={contactInfo.id}>
                                <ContactInfo name={contactInfo.name} address={contactInfo.address} phone={contactInfo.phone}/>
                            </div>
                        )}
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <p>© 2018 The BK Hairdressing</p>
                        </div>
                    </div>
                </div>
            </footer>
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

const connectedFooter = connect(mapStateToProps)(Footer);

export { connectedFooter as Footer };
