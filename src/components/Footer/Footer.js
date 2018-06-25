import React from 'react';
import './Footer.css';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

const footer = (props) => (
    <footer className="Footer text-muted">
        <div className="row ">
            <ContactInfo
                name="The BK Haidressing"
                address="7/329 Albany Hwy, Rosedale, Auckland 0632"
                phone="(09) 950-9994" />
            <ContactInfo
                name="The Little BK Haidressing"
                address="1 Raleigh Rd, Northcote,Auckland 0627"
                phone="(09) 480-1390" />
        </div>
        <div className="row">
            <div className="col-sm-12 text-center">
                <p>© 2018 The BK Hairdressing</p>
            </div>
        </div>
    </footer>
);

export default footer;
