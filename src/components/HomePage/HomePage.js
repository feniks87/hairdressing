import React, { Component } from 'react';
import ImageHair from '../../assets/images/1.jpg';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div>
                <img className="img-fluid" src={ImageHair} alt="Hair"/>
            </div>
        )
    }
}

export  default HomePage;


