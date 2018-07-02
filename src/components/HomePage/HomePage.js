import React, { Component } from 'react';
import ImageHair from '../../assets/images/1.jpg';
import Salon from '../../assets/images/salon.jpg';
import Haircut from '../../assets/images/haircut.jpg';
import Londa from '../../assets/images/londa.jpg'
import Kerastase from '../../assets/images/kerastase.jpg'
import Keune from '../../assets/images/keune.jpg'
import './HomePage.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";

class HomePage extends Component {
    render() {
        return (
            <div>
                <img className="ImageHair img-fluid" src={ImageHair} alt="Hair"/>
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
                        <div className="col-sm-7">
                            <h4 className="Paragraph-header">About The BK Hairdressing...</h4>
                            <p className="text-justify">
                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.
                                Some example text. Some example text. Some example text. Some example text. Some example text.</p>
                        </div>
                        <div className="col-md-5">
                            <img className="img-fluid Image-salon" src={Salon} alt="Salon"/>
                        </div>

                    </div>

                    <div className="row Content-space">
                        <div className="col-sm-5">
                            <img className="img-fluid" src={Haircut} alt="Haircut"/>
                        </div>
                        <div className="col-sm-7">
                            <p className="text-justify">
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
            </div>
        )
    }
}

export  default HomePage;


