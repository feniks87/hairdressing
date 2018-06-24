import React, { Component } from 'react';
import Aux from '../_Aux/_Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './Layout.css';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <Toolbar/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </Aux>
        )
    }
}

export default Layout;