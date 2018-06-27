import React from 'react';
import './TeamMember.css';

const teamMember = (props) => (
    <div className="row Stylist">
        <div className="col-md-3">
            <img className="Stylist-image img-fluid"
                 src={props.src}
                 alt={props.alt}
            />
        </div>
        <div className="col-md-9">
            <h4>{props.name}</h4>
            <p className="text-justify">
                {props.description}
            </p>
        </div>
    </div>
);

export default teamMember;