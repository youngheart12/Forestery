import React, { Component } from 'react'
import './contact.css';
import {Row,Col,Form, FormGroup, Label, Input,Button} from 'reactstrap';
import CompleteHeader from '../CompleteHeader/completeheader';
import Footer from '../Footer/footer';
import LastFooter from '../Footer/lastFooter';
import WOW from "wowjs";
import Media from 'react-media';
export class contactus extends Component {
    state={
        firstname:" ",
        lastname:" ",
        select:" ",
        email:" ",
        phone:" ",
        openDrops:false
    }
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
      }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
      if(this.state.select)
      {
      this.setState({
          openDrops:true
      })
      }
    }
       
    render() {
  
        return (
           <div>
              <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
             <div>
                 <CompleteHeader></CompleteHeader>
                 <div>
                    <Row>
                        <Col md="12">
                            <div className="wow slideInRight" >
                            <h3 style={{fontSize:"48px",padding:"25px",fontFamily:"'Palanquin Dark', sans-serif"}}>We'd love to hear from you</h3>
                            </div>
                        </Col>
                    </Row>
                    <div className="wow zoomIn" data-wow-delay="1s" style={{margin:"0px 25px"}}>
                    <Row>
                        <Col md="6"><h4 style={{marginTop:"25px"}}>What's your name</h4></Col>
                    </Row>
                    <Row>
                        <Col md="6">First Name <span style={{color:"red"}}>*</span>
                        <Input type="text" name="firstname" placeholder="enter your name" onChange={this.handleChange} required></Input>
                        </Col>
                        <Col md="6">Last Name<span style={{color:"red"}}>*</span>
                        <Input type="text" name="lastname" placeholder="enter your name" onChange={this.handleChange} required></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12"> <h5 style={{marginTop:"15px"}}>What can we help you with ?</h5>
                       
                        <Input type="select" name="select" value={this.state.select} id="exampleSelect" onChange={this.handleChange}>
            <option >--Select Option--</option>
            <option>Having issue with Logging</option>
            <option>Having issue in Loggin complain</option>
            <option>Want to change your job</option>
            
            <option>I would like to share content on your website</option>
            <option>Other</option>
          </Input></Col>
          </Row>
          </div>
          <br></br>
          {this.state.openDrops?(<div className="tobeHidden" style={{margin:"5px 35px"}}>
               <Row>
                  <Col md="12"><h6>Great, we can help you with that. We just need a little more information!
                      </h6></Col> <br></br>
                      <Col md="12" style={{margin:"10px 0px"}}>Email<span style={{color:"red"}}>*</span>
                        <Input type="text" name="email" placeholder="enter your name" onChange={this.handleChange} required></Input>
                        </Col>
                        <Col md="12">Phone<span style={{color:"red"}}>*</span>
                        <Input type="text" name="phone" placeholder="enter your name" onChange={this.handleChange} required ></Input>
                        </Col>
                   </Row> 
                   <Row>
                   <Col md="12" style={{textAlign:"center"}}>
                       <br></br><br></br>
                       
                   <Button color="success" size="lg">Submit</Button>
                   </Col>
                       
                   </Row>
                  
            </div>):(
            <div className="wow zoomIn" data-wow-delay="2s" style={{margin:"0px 45px"}}>
            <p style={{color:"Red"}}> <small>Please fill all the required filleds</small></p>
            </div>)}
            
                </div>
                <br></br><br></br><br></br><br></br> 
                <Footer></Footer>
                <LastFooter></LastFooter>
            </div>
             
            ) : (
                <div className="contact_page">
                <CompleteHeader></CompleteHeader>
                <div style={{marginLeft:"25%",marginRight:"25%",marginTop:"3%"}}>
                    <Row>
                        <Col md="12">
                            <div className="wow slideInRight" >
                            <h1 style={{fontSize:"48px",padding:"25px",fontFamily:"'Palanquin Dark', sans-serif"}}>We'd love to hear from you</h1>
                            </div>
                        </Col>
                    </Row>
                    <div className="wow zoomIn" data-wow-delay="1s">
                    <Row>
                        <Col md="6"><h4 style={{marginTop:"25px"}}>What's your name</h4></Col>
                    </Row>
                    <Row>
                        <Col md="6">First Name <span style={{color:"red"}}>*</span>
                        <Input type="text" name="firstname" placeholder="enter your name" onChange={this.handleChange} required></Input>
                        </Col>
                        <Col md="6">Last Name<span style={{color:"red"}}>*</span>
                        <Input type="text" name="lastname" placeholder="enter your name" onChange={this.handleChange} required></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12"> <h3 style={{marginTop:"15px"}}>What can we help you with ?</h3>
                        <br></br>
                        <Input type="select" name="select" value={this.state.select} id="exampleSelect" onChange={this.handleChange}>
            <option >--Select Option--</option>
           
            <option>Having issue with Logging</option>
            <option>Having issue in lodging complaint</option>
            <option>Want to change your job</option>
            
            <option>I would like to share content on your website</option>
            <option>Other</option>
          </Input></Col>
          </Row>
          </div>
          <br></br>
          {this.state.openDrops?(<div className="tobeHidden">
               <Row>
                  <Col md="12"><h4>Great, we can help you with that. We just need a little more information!
                      </h4></Col> <br></br>
                      <Col md="12" style={{margin:"10px 0px"}}>Email<span style={{color:"red"}}>*</span>
                        <Input type="text" name="email" placeholder="enter your name" onChange={this.handleChange} required></Input>
                        </Col>
                        <Col md="12">Phone<span style={{color:"red"}}>*</span>
                        <Input type="text" name="phone" placeholder="enter your name" onChange={this.handleChange} required ></Input>
                        </Col>
                   </Row> 
                   <Row>
                   <Col md="12" style={{textAlign:"center"}}>
                       <br></br><br></br>
                       
                   <Button color="success" size="lg">Submit</Button>
                   </Col>
                       
                   </Row>
                  
            </div>):
            (
            <div className="wow zoomIn" data-wow-delay="2s">
            <p style={{color:"Red"}}> <small>Please fill all the required filleds</small></p>
            </div>)}
            
                </div>
                <br></br><br></br><br></br><br></br>  <br></br><br></br><br></br><br></br>
                <Footer></Footer>
                <LastFooter></LastFooter>
            </div>
            )
          }
        </Media>
           </div>
        )
    }
}

export default contactus
