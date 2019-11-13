import React from 'react';
import { Button, Modal, ModalFooter,NavLink,Row,Col,Input } from 'reactstrap';
import '../Header/header.css';
import Media from 'react-media';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../action/authAction/signup';
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email:"",
      password:" "
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    this.props.login(user);
  }
  componentDidUpdate(prevProps)
  {
    if(prevProps.isAuthenticated !== this.props.isAuthenticated)
    {
    this.props.history.push('/');
    }
  }



  render() {
    
    return (
      <Media query="(max-width:800px)">
      {matches =>
        matches ? (
          <div style={{margin:"0px"}}>
          <NavLink onClick={this.toggle}  className="coollink">
         Login
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{width:"95%"}} >
         
         <div style={{textAlign:"center",margin:"35px"}}>
         <Row style={{margin:"0px"}}>
           <Col xs ="12" > <h3>Login</h3></Col>
           <Col xs="12" ><h6>New User? Create an account</h6></Col>
         </Row><br></br>
         <Row >
        <Col xs={{ size: 10,offset: 1 }}  style={{paddingBottom:"15px"}}>
          <Input type="text" placeholder="Your email id please"
           onChange={this.onChangeHandler}
           name="email"/>
        </Col>
        
        <Col xs={{size:10,offset:1}} style={{paddingBottom:"15px"}}>
          <Input type="password" placeholder="Your password please"
          name="password"
           onChange={this.onChangeHandler}/>
        </Col>
        
        <Col xs={{size:10,offset:1}} style={{paddingBottom:"15px"}}>
          <Button color="success" block onClick={this.onSubmit}>Submit</Button>
        </Col>
        <br></br>
        
         </Row>
         </div>
         <ModalFooter style={{textAlign:"center",backgroundColor:"#9288FF",justifyContent:"center",borderTop:"none"}}>
         <p style={{padding:"0px",margin:"0px",color:"white",fontSize:"1rem"}}>Forget your password? Get it Back</p>
         </ModalFooter>
        </Modal>
      </div>
      
        ) : (
          <div>
          <NavLink onClick={this.toggle}  className="coollink">
         Login
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{width:"400px"}}>
         
         <div style={{textAlign:"center",margin:"35px"}}>
         <Row style={{margin:"0px"}}>
           <Col md ="12" > <h2>Login</h2></Col>
           <Col md="12" ><h5>New User? Create an account</h5></Col>
         </Row><br></br>
         <Row >
        <Col md={{ size: 10,offset: 1 }}  style={{paddingBottom:"15px"}}>
          <Input type="text" placeholder="Your email id please"
          onChange={this.onChangeHandler}
          name="email"/>
        </Col>
        
        <Col md={{size:10,offset:1}} style={{paddingBottom:"15px"}}>
          <Input type="password" placeholder="Your password please"
          onChange={this.onChangeHandler} 
          name="password"
          />
        </Col>
        
        <Col md="12" style={{paddingBottom:"15px"}}>
          <Button color="success" onClick={this.onSubmit}>Submit</Button>
        </Col>
        <br></br>
        
         </Row>
         </div>
         <ModalFooter style={{textAlign:"center",backgroundColor:"#9288FF",justifyContent:"center",borderTop:"none"}}>
         <p style={{padding:"0px",margin:"0px",color:"white",fontSize:"1rem"}}>Forget your password? Get it Back</p>
         </ModalFooter>
        </Modal>
      </div>
        )
      }
      </Media>
     
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated:state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login}
)(ModalExample);

