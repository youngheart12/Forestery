import React, { Component } from 'react'
import {Container,Row,Col,Button,Alert} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../../../action/authAction/signup';
import './signup.css';
export class signup extends Component {
    state={
        name:"",
        email:"",
        password:" ",
        lat:null,
        lon:null,
        transfer:false
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        register: PropTypes.func.isRequired,
        error:PropTypes.object.isRequired
       
      };
      componentDidMount()
      {
       if(!navigator.geolocation)
       {
         alert("Turn on the geolocation please ");
       }else{
         navigator.geolocation.getCurrentPosition((position)=>{
          const lat=position.coords.latitude
          const lon=position.coords.longitude
          this.setState({lat:lat,
          lon:lon})
         })
       }
      }
      handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value}) ; 
  }
  handleError=()=>{
 alert("reload this page and fill again it's your fault ")
  }
  handleSubmit=(e)=>{
      e.preventDefault();
  
      const { name, email, password,lat,lon } = this.state;
  
      // Create user object
      const newUser = {
        name,
        email,
        password,
        lat,
        lon
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
     
        return (
            <div className="mainParent">
             <Container className="mainParentNode">
                 <Row>
                 {this.props.serror?<Alert color="danger">{this.props.error.serror} &#10005;</Alert>:null}
                     <Col md="3" sm="3" xs="12" style={{margin:"0px",padding:"0px"}}>
                       <img src="https://placeimg.com/270/590/arch" height="100%" style={{borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}}/>
                     </Col>
                     <Col md="9"sm="3" xs="12" style={{padding:"100px"}}>
                    <div>
                        <h3>REGISTRATION INFO</h3>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter your name" name="name" onChange={this.handleChange}></input>
                    </div>
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <div style={{flexGrow:"6",marginRight:"50px"}}>
                        <input type="text" placeholder="Enter your email" name="email" onChange={this.handleChange}></input>
                        </div>
                        <div style={{flexGrow:"3",marginRight:"50px"}}>
                      <input type="text" placeholder="Enter your latitude" value= {this.state.lat}/>
                        </div>
                        <div style={{flexGrow:"3"}}>
                      <input type="text" placeholder="Enter your longitude" value= {this.state.lon}/>
                        </div>
                    </div>
                    <div>
                        <input type="password" placeholder="Enter your password" className="customselect" name="password" onChange={this.handleChange}></input>
                    </div>
                    <div>
                    <select className="customselect">
  <option value="punjab">Punjab</option>
  <option value="delhi">Delhi</option>
  <option value="jammu">Jammu</option>
  <option value="maharastra">Maharastra</option>
  <option value="westbengal">West Bengal</option>
</select>
                    </div>
                    <br></br><br></br>
                    <div>
                        <Button color="success" onClick={this.handleSubmit}>Submit</Button>
                    </div>
                     </Col>
                 </Row>
             </Container>
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
