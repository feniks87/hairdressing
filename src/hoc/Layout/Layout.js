import React, { Component } from 'react';
import Aux from '../_Aux/_Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './Layout.css';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <Toolbar/>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;