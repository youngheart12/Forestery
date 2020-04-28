import React, { Component,Fragment} from 'react'
import '../secondpage/secondpage.css';
import {Button} from 'reactstrap';
import Media from 'react-media'
export class third extends Component {
 
  
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
                  {matches.small &&  <div >
                      <div  style={{boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",padding:"5px 5px"}}>
                        <a href="/second"> <h4 style={{textAlign:"left"}}>	&#8592;</h4></a> 
                         
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
                       
<input type="text" class="form-control"  maxlength="1" />
<input type="text" class="form-control"  maxlength="1" />
<input type="text" class="form-control"  maxlength="1" />
<input type="text" class="form-control"  maxlength="1" />
<input type="text" class="form-control"  maxlength="1" />
<input type="text" class="form-control"  maxlength="1" />
</div>
                      </div>
                      <br></br><br></br>
                      <div className="bu">
                      <Button block style={{marginTop:"8px",backgroundColor:"dodgerblue",borderColor:"dodgerblue",opacity:0.5}}>Submit</Button>
                      <br></br>
                      <p style={{textAlign:"center",fontSize:"12px"}}>Didn't receive your code? <a href="/second">Got a new one</a></p>
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
