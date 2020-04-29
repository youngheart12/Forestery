import React, { Component,Fragment} from 'react'
import './secondpage.css';
import {Button} from 'reactstrap';
import Media from 'react-media'
export class second extends Component {
 
  
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
                  {matches.small &&  <div className="parenttop">
                      <div className="parent">
                        <p>Suspicipous Login Attempt</p>
                      </div>
                      <div className="child">
                          <p >We've Detected An Unusual Login Attempt</p>
                      </div>
                      <div className="insideChild">
                          <p>We've noticed a login attempt to your account that seemed suspicipous. We'll send you a security code to verify
                              your identity. How do you want to receive your code?
                          </p>
                      </div>
                      <br></br>
                      <div className="insidedeep">
                          <p>Email address: c*****9@gmail.com</p>
                      </div>
                      <br></br>
                      <div className="bu">
                     <a href="/accounts-recovery"> <Button block style={{marginTop:"8px",backgroundColor:"dodgerblue",borderColor:"dodgerblue",opacity:1}}>Send Security Code</Button>
                     </a>
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

export default second
