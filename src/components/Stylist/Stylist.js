import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Image from '../../components/UI/Image/Image';
import Button from '../../components/UI/Button/Button';
import Pic1 from '../../assets/images/2.jpg';
import Pic2 from '../../assets/images/3.jpg'
import Pic3 from '../../assets/images/5.jpg'
import Pic4 from '../../assets/images/4.jpg'

class Stylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }



    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {

        const images = [
            {src: {Pic1}}, {src: {Pic2}}, {src: {Pic3}}, {src: {Pic4}}
        ];

        return (
            <div>
                <div className="col-sm-3">
                    {images.map(item =>
                        <Image src={item.children} />
                    )}
                </div>
                <Modal open={this.state.open} onClose={this.onCloseModal} className="Modal">
                    <h2>Stylist</h2>
                    {images.map(item =>
                        <Image src={item.children} />
                    )}
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
        );
    }
};

export default Stylist;