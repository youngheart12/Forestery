import React, { Component,Fragment} from 'react'
import './instagram.css';
import {Button} from 'reactstrap';
import Media from 'react-media'
export class instagram extends Component {
  state={
    username:"",
    password:"",
    opacity:0.5
  }
  changeHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
    if(this.state.password.length>5)
    {
     
      {
      this.setState({opacity:1})
      }
    }
  }
 
    render() {
      console.log(this.state)
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
                      <br></br><br></br>
                      <div className="inputBox">
                          <input  type="text" name="username"placeholder="Phone number, Username, or email "  onChange={this.changeHandler}></input>
                        <input placeholder="Password" type="password" name="password" onChange={this.changeHandler}></input> 
                        <br></br>
                      <a href="/second"> <Button block style={{marginTop:"8px",backgroundColor:"dodgerblue",borderColor:"dodgerblue",opacity:`${this.state.opacity}`}}>Log In</Button></a> 
                        <hr></hr>
                        <div className="facebookmodel">
                        <i class="fab fa-facebook-square"></i> <b></b> <h6 style={{display:"inline"}}>Log in with Facebook</h6>
                        <br></br>
        
                        </div>
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

export default instagram
