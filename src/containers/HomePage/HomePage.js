import React, { Component } from 'react';
import ImageHair from '../../assets/images/1.jpg';
import Salon from '../../assets/images/salon.jpg';
import Haircut from '../../assets/images/haircut.jpg';
import Londa from '../../assets/images/londa.jpg'
import Kerastase from '../../assets/images/kerastase.jpg'
import Keune from '../../assets/images/keune.jpg'
import './HomePage.css';
import Aux from '../../hoc/Auxiliary/_Aux';

class HomePage extends Component {
    render() {
        return (
            <Aux>
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
                            <h4 className="Paragraph-header">About The BK Hairdressing</h4>
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ultrices gravida dictum fusce ut placerat orci nulla. Maecenas accumsan lacus vel facilisis.
                            Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.
                            Porttitor eget dolor morbi non. Quam lacus suspendisse faucibus interdum posuere.
                            In metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
                            Tincidunt id aliquet risus feugiat. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam.
                            Urna duis convallis convallis tellus id. Ornare quam viverra orci sagittis eu volutpat odio.
                            Eget sit amet tellus cras adipiscing enim eu turpis egestas.
                            Diam maecenas ultricies mi eget mauris pharetra et ultrices.
                            Quam quisque id diam vel quam elementum. Suspendisse potenti nullam ac tortor.</p>
                        </div>
                        <div className="col-md-5">
                            <img className="img-fluid Image-salon" src={Salon} alt="Salon"/>
                        </div>

                    </div>

                    <div className="row Content-space">
                        <div className="col-sm-5">
                            <img className="img-fluid Image-haircut" src={Haircut} alt="Haircut"/>
                        </div>
                        <div className="col-sm-7">
                            <p className="text-justify">Ac turpis egestas integer eget aliquet nibh praesent tristique magna.
                            Nullam vehicula ipsum a arcu. Adipiscing elit duis tristique sollicitudin nibh.
                            Morbi leo urna molestie at elementum eu facilisis sed odio. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.
                            Enim facilisis gravida neque convallis a. Feugiat scelerisque varius morbi enim nunc faucibus a.
                            Ac tortor dignissim convallis aenean et tortor at risus viverra.
                            Placerat orci nulla pellentesque dignissim enim sit.
                            Viverra maecenas accumsan lacus vel facilisis volutpat.
                            Sem et tortor consequat id porta nibh venenatis cras.
                            Pulvinar mattis nunc sed blandit libero volutpat sed cras.
                            Eu feugiat pretium nibh ipsum consequat. Felis eget velit aliquet sagittis id consectetur purus.
                            Tempus imperdiet nulla malesuada pellentesque elit. Ultricies tristique nulla aliquet enim tortor at auctor.
                            Condimentum lacinia quis vel eros donec ac odio. Arcu non odio euismod lacinia at. Euismod nisi porta lorem mollis aliquam.
                            A diam sollicitudin tempor id eu.</p>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export  default HomePage;


