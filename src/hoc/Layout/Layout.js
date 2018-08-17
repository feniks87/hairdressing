import React, { Component } from 'react';
import Aux from '../Auxiliary/_Aux';
import { NavMenu } from '../../components/Navigation/NavMenu/NavMenu';
import { Footer } from '../../components/Footer/Footer';
import './Layout.css'

class Layout extends Component {
    render () {
        return (
            <Aux>
                <NavMenu/>
                <main className="Content">
                    {this.props.children}
                </main>
                <Footer/>
            </Aux>
        )
    }
}

export default Layout;