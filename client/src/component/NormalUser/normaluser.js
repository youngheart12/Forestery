import React, { Component } from 'react'
import CompleteHeader from '../CompleteHeader/completeheader';
import Footer from '../Footer/footer';
import {Row,Col,Alert,Form,FormGroup,Label,Input,NavLink,Button} from 'reactstrap'
import {newRegister} from '../../action/authAction/signup';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import LastFooter from '../Footer/lastFooter'; 
export class normaluser extends Component {
  static propTypes = {
   newRegister:PropTypes.func.isRequired,
   auth:PropTypes.bool
   
  };
    state={
        msg:false,
        name:"",
        email:"",
        describe:"",
        observe:" ",
        lat:"",
        lan:" "
    }
   
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value}) ; 
  }
  handleSubmit=(e)=>{
  e.preventDefault();
  if (!navigator.geolocation) {
    return alert('Geolocation is not supported by your browser.')
}
navigator.geolocation.getCurrentPosition((position)=>{
  this.setState({
    lat:position.coords.latitude,
    lan:position.coords.longitude
  })
})
  const {name,email,describe,observe,lat,lan}=this.state;
  const newData={
  name,email,describe,observe,lat,lan
}
this.props.newRegister(newData)
  }
componentDidMount()
{
  if(this.props.auth)
  alert("success");
}
    render() {
     
        return (
            <div>
                <CompleteHeader></CompleteHeader>
                <Row>
                    <Col md="6">
                    <div className="signup">
                <p> {this.state.msg ? (
                  <Alert color='danger'>{this.state.msg}</Alert>
                ) : null}</p>
                    <Row className="signupdiv" style={{margin:"25px"}}>
                        <Col md ={{size:12}} style={{padding:"15px"}}>
                          <h3 style={{fontSize:"48px"}} className="wow slideInLeft">Lets together Prevent The Environment</h3>
                          <p style={{fontSize:"24px",color:"#572991"}}className="wow fadeInDown" data-wow-delay="0.6s">
                            Its time to return back what nature has given to us
                          </p>
                          <Form onSubmit={this.handleSubmit} className="wow zoomIn" data-wow-delay="1s">
            <FormGroup>
              <Label for="exampleEmail">Email <span style={{color:"red"}}>*</span></Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="username@example.com" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Name <span style={{color:"red"}}>*</span></Label>
              <Input type="text" name="name" id="examleUsername" placeholder="username" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">What you observed  <span style={{color:"red"}}>*</span></Label>
              <Input type="text" name="observe" id="examplePassword" placeholder="@mypass" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Describe in detail (Optional) </Label>
              <Input type="text" name="describe" id="examplePassword" placeholder="@mypass" onChange={this.handleChange} />
            </FormGroup>
            </Form>
            <br></br>
            <Row className="wow zoomIn" data-wow-delay="1s">
                <Col md="4" style={{padding:"15zpx"}}>
                    <Button  size="md" style={{padding:"10px 10px"}} onClick={this.handleSubmit} color="info">Submit </Button>
                </Col>
                
            </Row>
                        </Col>
                        
                    </Row>
                   
                </div>
                    </Col>
                    <Col md="6">

                    </Col>
                </Row>
                <Footer></Footer>
                <LastFooter></LastFooter>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
  auth:state.auth.filled
})
export default connect(mapStateToProps,{newRegister})(normaluser);
