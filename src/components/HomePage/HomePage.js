import React, { Component } from 'react';
import ImageHair from '../../assets/images/1.jpg';
import Salon from '../../assets/images/salon.jpg';
import Haircut from '../../assets/images/haircut.jpg';
import Londa from '../../assets/images/londa.jpg'
import Kerastase from '../../assets/images/kerastase.jpg'
import Keune from '../../assets/images/keune.jpg'
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div>
                <img className="Image img-fluid" src={ImageHair} alt="Hair"/>
                <div className="d-flex flex-wrap justify-content-center bg-white">
                    <div className="p-2">
                        <img className="img-fluid Image-brand" src={Londa} alt="Londa"/>
                    </div>
                    <div className="p-2">
                        <img className="img-fluid Image-brand" src={Kerastase} alt="Kerastase"/>
                    </div>
                    <div className="p-2">
                        <img className="img-fluid Image-brand" src={Keune} alt="Keune"/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                            <h4 className="Paragraph-header">About The BK Hairdressing...</h4>
                            <p className="Text-home text-justify"><img className="img-fluid Image-salon" src={Salon} alt="Salon"/>
                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.</p>
                    </div>

                    <div className="row">
                        <p className="Text-home text-justify"><img className="img-fluid Image-haircut" src={Haircut} alt="Haircut"/>
                            Some example text. Some example text. Some example text. Some example text. Some example text.
                            Some example text. Some example text. Some example text. Some example text. Some example text.
                            Some example text. Some example text. Some example text. Some example text. Some example text.
                            Some example text. Some example text. Some example text. Some example text. Some example text.
                            Some example text. Some example text. Some example text. Some example text. Some example text.
                            Some example text. Some example text. Some example text. Some example text. Some example text.
                            Some example text. Some example text. Some example text. Some example text. Some example text.
                            Some example text. Some example text. Some example text. Some example text. Some example text.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export  default HomePage;


