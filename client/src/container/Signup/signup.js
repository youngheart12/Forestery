
import React, { Component } from 'react'
import {Row,Col,Form,FormGroup,Input,Label,Button,Alert,NavLink} from 'reactstrap';
import {register} from '../../action/authAction/signup';
import CompleteHeader from '../../component/CompleteHeader/completeheader';
import {Redirect} from 'react-router-dom';
import {browserHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


export class signup extends Component {
    state={
        name:"",
        email:"",
        password:" ",
        transfer:false
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        register: PropTypes.func.isRequired,
       
      };

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value}) ; 
  }
  handleSubmit=(e)=>{
      e.preventDefault();
  
      const { name, email, password } = this.state;
  
      // Create user object
      const newUser = {
        name,
        email,
        password
      };
this.props.register(newUser);    
  };
  
 

    render() {
   
       console.log(localStorage.getItem("token"));
        return (

          <div>
            <CompleteHeader></CompleteHeader>
            <Row>
              <Col md="6">
              <div className="signup" style={{width:"100%"}}>
                <p> {this.state.msg ? (
                  <Alert color='danger'>{this.state.msg}</Alert>
                ) : null}</p>
                    <Row className="signupdiv" style={{margin:"0px"}}>
                        <Col md ={{size:10}} style={{padding:"15px"}}>
                          <h3 style={{fontSize:"48px"}} className="wow slideInLeft">Get Started With Your Account</h3>
                          <p style={{fontSize:"24px",color:"#572991"}}className="wow fadeInDown" data-wow-delay="0.6s">
                         Help in making a better tommorow
                          </p>
                          <Form onSubmit={this.handleSubmit} className="wow zoomIn" data-wow-delay="1s">
            <FormGroup>
              <Label for="exampleEmail">Email <span style={{color:"red"}}>*</span></Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="username@example.com" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Username <span style={{color:"red"}}>*</span></Label>
              <Input type="text" name="name" id="examleUsername" placeholder="username" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password <span style={{color:"red"}}>*</span></Label>
              <Input type="password" name="password" id="examplePassword" placeholder="@mypass" onChange={this.handleChange} />
            </FormGroup>
            </Form>
            <br></br>
            <Row className="wow zoomIn" data-wow-delay="1s">
                <Col md="4" style={{padding:"15px"}}>
                    <Button  size="md" style={{padding:"10px 10px"}} onClick={this.handleSubmit} color="info">Get Started </Button>
                </Col>
                
            </Row>
                        </Col>
                      
                    </Row>
                   
                </div>
              </Col>
              <Col md="5">
                  <img src={require('../../Images/gree.jpg')}/>
              </Col>
            </Row>
          </div>
  
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
  export default connect(
    mapStateToProps,
    { register }
  )(signup);
