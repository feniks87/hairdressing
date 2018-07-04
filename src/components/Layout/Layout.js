import React, { Component } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import NavMenu from '../Navigation/NavMenu/NavMenu';
import './Layout.css';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <NavMenu/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </Aux>
        )
    }
}

export default Layout;