import React, { Fragment } from 'react';
import Media from 'react-media';
import CompleteHeader from '../CompleteHeader/completeheader';
import Typist from 'react-typist';
 import{Row,Col,Button,NavItem} from 'reactstrap';
 import LoginModal from '../LoginModel/loginmodel';
 import{connect} from 'react-redux';
 import {logout} from '../../action/authAction/signup';
 import PropTypes from 'prop-types';
 import  '../Layout/layout.css';
class Mainpart extends React.Component {
  static propTypes={
    isAuthenticated:PropTypes.bool,
    logout:PropTypes.func.isRequired
  }
  handleLogout=()=>{
    this.props.logout();
    
  }
  render() {
   
    return (
      <div>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small &&
            <div className="smallbanner">
            <CompleteHeader></CompleteHeader>
            <div className="mobileHeader">
            <h2 style={{fontSize:"3.5rem"}}>Time to reduce forest fire using technology</h2>
            <Button color="info" outlined>Join Hand</Button>
            </div>
                </div>}
              {matches.medium && 
            <div className="middlebanner">
            <CompleteHeader></CompleteHeader>
            <div className="mobileHeader">
            <h2 style={{fontSize:"3.5rem"}}>Time to reduce forest fire using technology</h2>
            <Button color="info" outlined>Join Hand</Button>
            </div>
                </div>}
              {matches.large && 
            <div className="mainPart">
              {this.props.isAuthenticated?   <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contactus">Contact</a></li>
           
            <li><a href="/dashboard">Profile</a></li>
            <li><a href="#" onClick={this.handleLogout}>Logout</a></li>
            
          </ul> :
             <ul>
             <li><a href="/">Home</a></li>
             <li><a href="/about">About</a></li>
             <li><a href="/contactus">Contact</a></li>

             <li><a href="/signup">Signup</a></li>
             <NavItem>
               <LoginModal></LoginModal>
             </NavItem>
           </ul>
          
            }
           
            <br></br> <br></br> <br></br> <br></br>
            <div>
              <p className="main_quotes" id="getvalue">
                <Typist> " Trees are the Earth’s<br></br>endless effort to speak<br></br> to the listening heaven. "</Typist>
              </p>
            </div>
            <Button className="main_button" style={{ borderRadius: "25px", padding: "10px 20px", margin: "0px 12%", boxShadow: '0 25px 50px -12px rgba(0, 0, 0, .25)', backgroundColor: "#2ed573", border: "1px solid #2ed573" }}>Join Hands To Save</Button>
          </div>
            
            }
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}
const mapStateToProps=state=>({
isAuthenticated:state.auth.isAuthenticated
})


export default connect(mapStateToProps,{logout})( Mainpart);