import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';

  import '../Header/header.css';
  import Media from 'react-media';
  import { logout } from '../../action/authAction/signup';
  import { connect } from 'react-redux';
  import PropTypes from 'prop-types';
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  static propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  handleLogout=()=>{
    this.props.logout();
    
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { user } = this.props.auth;
    var first=user.name
    return (
      <Media query="(max-width:800px)">
        {
          matches =>
          matches ?(
            <div class="headerprop">
        <Navbar light expand="md"  className="headerstyle">
        <NavbarBrand href="/"><span style={{color:"yellow"}}>i</span>Forestery</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="toggler" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/"className="coollink"><i class="fas fa-home"></i> Home </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutus"className="coollink"><i class="fas fa-book"></i> About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contactus"className="coollink"><i class="fas fa-phone" id="try"></i> Contact us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/normaluser"className="coollink">
                  {/* <i class="fas fa-id-badge"id="try"></i>  */}
                  Touch</NavLink>
              </NavItem>
              <UncontrolledDropdown setActiveFromChild direction="right"  isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }} >
          <DropdownToggle tag="a" className="nav-link" caret id="dropstable">
         {first}
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem tag="a" href="/dashboard"   >Profile</DropdownItem>
            <DropdownItem tag="a" href="/"  onClick={this.handleLogout} >Logout</DropdownItem>

          </DropdownMenu>
        </UncontrolledDropdown>
        
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>


          ):(
            <div class="headerprop">
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
                  <NavLink href="/dashboard"className="coollink">
                      {/* <i class="fas fa-id-badge"id="try"></i>  */}
                      Profile</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink href="/"className="coollink" onClick={this.handleLogout}>
                      {/* <i class="fas fa-id-badge"id="try"></i>  */}
                      Logout</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          )
        }
      </Media>

      
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps,{logout})(Example);