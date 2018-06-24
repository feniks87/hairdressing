import React from 'react';
import './Footer.css';

const footer = (props) => (
    <footer className="Footer">
        <div className="row text-muted">
            <div className="col-sm-6">
                <h5 className="text-center">The BK Haidressing</h5>
                <p className="text-center">7/329 Albany Hwy, Rosedale, Auckland 0632</p>
                <p className="text-center">Call (09) 950-9994 for appointments!</p>
            </div>
            <div className="col-sm-6">
                <h5 className="text-center">The Little BK Haidressing</h5>
                <p className="text-center">1 Raleigh Rd, Northcote,Auckland 0627</p>
                <p className="text-center">Call (09) 480-1390 for appointments!</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 text-sm-center">
                <p className="text-muted">© 2018 The BK Hairdressing</p>
            </div>
        </div>
    </footer>
)

export default footer;
