import React, { Component } from 'react';
import './NavMenu.css';
import Logo from '../../Logo/Logo';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

class NavMenu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,

        });
    }
    render() {
        return (
            <div>
                <Navbar className="Toolbar" expand="md" fixed="top" dark>
                    <NavbarBrand href="/"><Logo/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto NavItem" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/services">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/book-online">Book Online</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/our-team">Our Team</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto NavItem" navbar>
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/registration">Sign Up</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavMenu;