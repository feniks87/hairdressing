import React, { Component } from 'react';
import Heading from '../../UI/Heading/Heading';
import './ContactPage.css'
import ContactInfo from '../../../components/ContactInfo/ContactInfo';
import Hours from '../../../components/Hours/Hours';

const BASE_URL = process.env.REACT_APP_API_PATH;

    class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: null,
        };

        this.setContacts = this.setContacts.bind(this);
    }

    setContacts(result) {
        this.setState({ result });
    }

    componentDidMount() {
        fetch(`${BASE_URL}/contacts`)
            .then(response => response.json())
            .then(result => this.setContacts(result))
            .catch(error => console.log(error));
    }

    render() {

        const result = this.state.result;
        if (!result) { return null; }

        return (
            <div className="container">
                <Heading>Contact Us</Heading>
                    {result.map(contactInfo =>
                        <div className="row">
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
        )
    }
}

export  default ContactPage;


