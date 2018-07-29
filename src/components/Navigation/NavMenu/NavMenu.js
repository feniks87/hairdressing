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
        const isLoggedIn = this.props.authentication && this.props.authentication.loggedIn;
        let authSection;
        if (isLoggedIn) {
            authSection = 
                <Nav className="ml-auto NavItem" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/logout">Logout</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/account">My Account</NavLink>
                    </NavItem>
                </Nav>;
          } else {
            authSection =
                <Nav className="ml-auto NavItem" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/registration">Sign Up</NavLink>
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
                                <NavLink tag={Link} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/services">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/book-online">Book Online</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/our-team">Our Team</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/contact">Contact</NavLink>
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