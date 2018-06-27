import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Heading from '../../components/UI/Heading/Heading'
import Button from '../../components/UI/Button/Button';
import './OurTeamPage.css';
import Pic1 from '../../assets/images/2.jpg';
import Pic2 from '../../assets/images/3.jpg'
import Pic3 from '../../assets/images/5.jpg'
import Pic4 from '../../assets/images/4.jpg'
import TeamMember from '../OurTeamPage/TeamMember/TeamMember';



class OurTeamPage extends Component {
    /*state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        const images = [
            {src: {Pic1}}, {src: {Pic2}}, {src: {Pic3}}, {src: {Pic4}}
        ];
        return (
            <div className="container">
                <Heading>Our Team</Heading>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="Image-team img-thumbnail img-fluid" src={Pic1} alt="Haidresser 1" onClick={this.onOpenModal}/>
                    </div>
                    <Modal open={open} onClose={this.onCloseModal} className="Modal">
                        <h2>Stylist</h2>
                        <img className="img-fluid" src={Pic1} alt="Haidresser 1"/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                            hendrerit risus, sed porttitor quam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                            hendrerit risus, sed porttitor quam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                            hendrerit risus, sed porttitor quam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                            hendrerit risus, sed porttitor quam.
                        </p>
                        <Button clicked={this.onCloseModal}>Close</Button>
                        <Button onClick="#">Book</Button>
                    </Modal>

                    <div className="col-sm-3">
                        <img className="Image-team img-thumbnail img-fluid" src={Pic2} alt="Haidresser 2" onClick={this.onOpenModal}/>
                    </div>
                    <Modal open={open} onClose={this.onCloseModal} className="Modal">
                        <h2>Stylist</h2>
                        <img className="img-fluid" src={Pic2} alt="Haidresser 2"/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                            hendrerit risus, sed porttitor quam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                            hendrerit risus, sed porttitor quam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                            hendrerit risus, sed porttitor quam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                            hendrerit risus, sed porttitor quam.
                        </p>
                        <Button clicked={this.onCloseModal}>Close</Button>
                        <Button onClick="#">Book</Button>
                    </Modal>
                </div>
            </div>
        );
    }*/

    render() {
        return (
           <div className="container">
               <Heading>Our Team</Heading>
               <TeamMember src={Pic1} alt="Anna Stylist" name="Anna" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam." />
               <TeamMember src={Pic2} alt="Bella Stylist" name="Bella" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam." />
               <TeamMember src={Pic3} alt="Peter Stylist" name="Peter" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam." />
               <TeamMember src={Pic4} alt="Valentina Stylist" name="Valentina" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam." />

           </div>
        )
    }


}

export  default OurTeamPage;


