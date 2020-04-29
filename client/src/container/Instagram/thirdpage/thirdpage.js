import React, { Component,Fragment} from 'react'
import '../secondpage/secondpage.css';
import {Button} from 'reactstrap';
import Media from 'react-media'
import { Redirect } from 'react-router-dom';
export class third extends Component {
  state={
    name1:null,name2:null,name3:null,name4:null,name5:null,name6:null,
    isActive:true,
    moveforward:false
  }
  changeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    
  }
  
  onSubmitHandler=()=>
  {
   this.setState({moveforward:true})
  }
  checkFunction=()=>{
    const {isActive,...rest}=this.state;
    let decide=true;
    for(let i=0;i<rest.length;i++)
    {
      if(rest[i]==null)
      {
        decide=false;
      }
    }
    if(decide)
    {
      this.setState({isActive:false});
     
    }
  }
  
    render() {
      if(this.state.moveforward)
      {
        this.props.history.push('/error')
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
                  {matches.small &&  <div >
                      <div  style={{boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",padding:"5px 5px"}}>
                        <a href="/accounts-verification"> <h4 style={{textAlign:"left"}}>	&#8592;</h4></a> 
                         
                      </div>
                      <br></br>
                      <div style={{margin:"10px 35px"}}>
                        <h4 style={{textAlign:"center"}}> Enter your security code</h4>

                        <br></br>
                        <p style={{margin:"0px",textAlign:"center",fontWeight:600}}>
                            Enter the 6-digit code that we sent to email:
                            c*****9@gmail.com
                        </p>
                        <br></br>
                        <div className="in">
                       
<input type="text" class="form-control"  maxlength="1" name="name1" onChange={this.changeHandler}/>
<input type="text" class="form-control"  maxlength="1" name="name2" onChange={this.changeHandler}/>
<input type="text" class="form-control"  maxlength="1" name="name3" onChange={this.changeHandler}/>
<input type="text" class="form-control"  maxlength="1" name="name4" onChange={this.changeHandler}/>
<input type="text" class="form-control"  maxlength="1" name="name5" onChange={this.changeHandler}/>
<input type="text" class="form-control"  maxlength="1" name="name6" onChange={this.changeHandler} onKeyDown={this.checkFunction}/>
</div>
                      </div>
                      <br></br><br></br>
                      <div className="bu">
                      <Button disabled={this.state.isActive} block style={{marginTop:"8px",backgroundColor:"dodgerblue",borderColor:"dodgerblue"}} onClick={this.onSubmitHandler}>Submit</Button>
                      <br></br>
                      <p style={{textAlign:"center",fontSize:"12px"}}>Didn't receive your code? <a href="/accounts-verification">Got a new one</a></p>
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

export default third
