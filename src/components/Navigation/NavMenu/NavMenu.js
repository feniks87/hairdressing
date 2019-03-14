import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
        this.hide = this.hide.bind(this);

        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    hide() {
        if (this.state.isOpen) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        };
    }

    render() {
        const linkStyle = {color: 'white', textDecoration: 'none'}
        const isLoggedIn = this.props.authentication && this.props.authentication.loggedIn;
        let authSection;
        if (isLoggedIn) {
            authSection =
                <Nav className="ml-auto NavItem" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/account" onClick={this.hide} style={linkStyle}>My Account</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/logout" onClick={this.hide} style={linkStyle}>Logout</NavLink>
                    </NavItem>
                </Nav>;
          } else {
            authSection =
                <Nav className="ml-auto NavItem" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/login" onClick={this.hide} style={linkStyle}>Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/registration" onClick={this.hide} style={linkStyle}>Sign Up</NavLink>
                    </NavItem>
                </Nav>;
          }
        return (
            <div>
                <Navbar className="Toolbar" expand="md" fixed="top" dark>
                    <NavbarBrand tag={Link} to="/" className="LogoPadding"><Logo/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto NavItem" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/" onClick={this.hide} style={linkStyle}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/services" onClick={this.hide} style={linkStyle}>Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/book-online" onClick={this.hide} style={linkStyle}>Book Online</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/our-team" onClick={this.hide} style={linkStyle}>Our Team</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/contact" onClick={this.hide} style={linkStyle}>Contact</NavLink>
                            </NavItem>
                        </Nav>
                        {authSection}
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    return {
        authentication
    };
}

const connectedNavMenu = connect(mapStateToProps)(NavMenu);
export { connectedNavMenu as NavMenu };