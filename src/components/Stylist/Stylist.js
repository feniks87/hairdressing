import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Button from '../../components/UI/Button/Button';

class Stylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            mysource: props.mysource
        };
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {

        return (
            <div>
                <div className="col-sm-3">
                    <img className="Image-team img-thumbnail img-fluid" src={require(`${this.state.mysource}`)} alt="Haidresser 1" onClick={this.onOpenModal}/>
                </div>
                <Modal open={this.state.open} onClose={this.onCloseModal} className="Modal">
                    <h2>Stylist</h2>
                    <img className="img-fluid" src={require(`${this.state.mysource}`)} alt="Haidresser 1"/>
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