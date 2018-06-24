import React, { Component } from 'react';
import ImageHair from '../../assets/images/1.jpg';
import Salon from '../../assets/images/salon.jpg';
import Haircut from '../../assets/images/haircut.jpg';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div>
                <img className="Image img-fluid" src={ImageHair} alt="Hair"/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <h4 className="Paragraph-header">About The BK Hairdressing...</h4>
                            <p className="Text-home text-justify">Some example text. Some example text. Some example text. Some example text. Some example text.

                                Some example text. Some example text. Some example text. Some example text. Some example text.

                                Some example text. Some example text. Some example text. Some example text. Some example text.

                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.

                                Some example text. Some example text. Some example text. Some example text. Some example text.

                                Some example text. Some example text. Some example text. Some example text. Some example text.

                                Some example text. Some example text. Some example text. Some example text. Some example text.</p>

                        </div>
                        <div className="col-sm-5">
                            <img className="Image-salon img-fluid" src={Salon} alt="Salon"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-5">
                            <img className="img-fluid Image-haircut" src={Haircut} alt="Haircut"/>
                        </div>
                        <div className="col-sm-7">
                            <p className="Text-home text-justify">Some example text. Some example text. Some example text. Some example text. Some example text.

                                Some example text. Some example text. Some example text. Some example text. Some example text.

                                Some example text. Some example text. Some example text. Some example text. Some example text.

                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.

                                Some example text. Some example text. Some example text. Some example text. Some example text.

                                Some example text. Some example text. Some example text. Some example text. Some example text.</p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export  default HomePage;


