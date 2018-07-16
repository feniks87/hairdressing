import React, {Component} from 'react';
import './Footer.css';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

const PATH_CONTACT = 'http://localhost:3000/api/contacts';

class Footer extends Component {

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
        fetch(`${PATH_CONTACT}`)
            .then(response => response.json())
            .then(result => this.setContacts(result))
            .catch(error => console.log(error));
    }

    render() {

        const result = this.state.result;
        console.log("contact" + result);
        if (!result) { return null; }

        return (
            <footer className="Footer text-muted">
                <div className="container">
                    <div className="row">
                        {result.map(contactInfo =>
                            <div className="col-sm-6">
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

export default Footer;
