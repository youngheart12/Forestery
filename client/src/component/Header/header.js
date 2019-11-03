import React,{Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
  import './header.css';
  import LoginModal from '../LoginModel/loginmodel';
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="headerprop">
        <Navbar light expand="md"  className="headerstyle">
          <NavbarBrand href="/"><span style={{color:"yellow"}}>i</span>Forestery</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="toggler" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/"className="coollink">
                  {/* <i class="fas fa-home"id="try"></i> */}
                   Home </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about"className="coollink">
                  {/* <i class="fas fa-book"id="try"></i> */}
                   About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contactus"className="coollink">
                  {/* <i class="fas fa-phone" id="try"></i>  */}
                  Contact us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup"className="coollink">
                  {/* <i class="fas fa-id-badge"id="try"></i>  */}
                  Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/normaluser"className="coollink">
                  {/* <i class="fas fa-id-badge"id="try"></i>  */}
                  Touch</NavLink>
              </NavItem>
              <NavItem>
               <LoginModal></LoginModal>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;