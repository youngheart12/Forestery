
import React, { Fragment } from 'react'
import {Row,Col,Form,FormGroup,Input,Label,Button,Alert,NavLink} from 'reactstrap';
import {register} from '../../action/authAction/signup';
import CompleteHeader from '../../component/CompleteHeader/completeheader';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Media from 'react-media';

export class signup extends React.Component {
    state={
        name:"",
        email:"",
        password:" ",
        transfer:false
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        register: PropTypes.func.isRequired,
        error:PropTypes.object.isRequired
       
      };

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value}) ; 
  }
  handleError=()=>{
 alert("reload this page and fill again it's your fault ")
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
  componentDidUpdate(prevProps)
  {
    if(prevProps.isAuthenticated !== this.props.isAuthenticated)
    {
    this.props.history.push('/');
    }
  }
  

    render() {
  
      console.log(this.props.error);
        return (
          <div>
           
          <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
          }}>
            {matches => (
              <Fragment>
                {matches.small &&  <div>
            <CompleteHeader></CompleteHeader>
            <Row>
              <Col md="6" xs="12">
              <div className="signup" style={{width:"100%"}}>
           
                    <Row className="signupdiv" style={{margin:"0px"}}>
                  
                        <Col md ={{size:10}} style={{padding:"15px",margin:"15px"}}>
                          <h5 style={{fontSize:"2rem"}} className="wow slideInLeft">Get Started With Your Account</h5>
                          <p style={{fontSize:"1rem",color:"#572991"}}className="wow fadeInDown" data-wow-delay="0.6s">
                         Help us in making a better tommorow
                          </p>
                          {this.props.serror?<Alert color="danger" onClick={this.handleError}>{this.props.error.serror} &#10005;</Alert>:null}
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
              <Col md="5" xs="12">
                  <img src={require('../../Images/gree.jpg')} style={{width:"350px",height:"350px"}}/>
              </Col>
            </Row>
          </div>}
                {matches.medium &&  <div>
            <CompleteHeader></CompleteHeader>
            <Row>
              <Col md="6" xs="12">
              <div className="signup" style={{width:"100%"}}>
           
                    <Row className="signupdiv" style={{margin:"0px"}}>
                  
                        <Col md ={{size:10}} style={{padding:"45px"}}>
                          <h3 style={{fontSize:"3rem"}} className="wow slideInLeft">Get Started With Your Account</h3>
                          <p style={{fontSize:"24px",color:"#572991"}}className="wow fadeInDown" data-wow-delay="0.6s">
                         Help in making a better tommorow
                          </p>
                          {this.props.serror?<Alert color="danger" onClick={this.handleError}>{this.props.error.serror} &#10005;</Alert>:null}
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
              <Col md="5" xs="12">
                  <img src={require('../../Images/gree.jpg')}/>
              </Col>
            </Row>
          </div>}
                {matches.large && 
                 <div>
                 <CompleteHeader></CompleteHeader>
                 <Row>
                   <Col md="6" xs="12">
                   <div className="signup" style={{width:"100%"}}>
                
                         <Row className="signupdiv" style={{margin:"0px"}}>
                       
                             <Col md ={{size:10}} style={{padding:"15px"}}>
                               <h3 style={{fontSize:"3rem"}} className="wow slideInLeft">Get Started With Your Account</h3>
                               <p style={{fontSize:"24px",color:"#572991"}}className="wow fadeInDown" data-wow-delay="0.6s">
                              Help in making a better tommorow
                               </p>
                               {this.props.serror?<Alert color="danger" onClick={this.handleError}>{this.props.error.serror} &#10005;</Alert>:null}
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
                   <Col md="5" xs="12">
                       <img src={require('../../Images/gree.jpg')}/>
                   </Col>
                 </Row>
               </div>
                
                
                }
              </Fragment>
            )}
          </Media>
        </div>
         
  
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error:state.auth.error
  });
  
  export default connect(
    mapStateToProps,
    { register }
  )(signup);
