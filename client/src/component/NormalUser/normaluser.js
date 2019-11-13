import React, { Fragment } from 'react';
import Media from 'react-media';
import {Jumbotron,Button,NavLink,NavItem} from 'reactstrap';
class Nomatch extends React.Component {
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
              {matches.small && <div style={{textAlign:"center",padding:"45px"}}>
                <h1 style={{fontSize:"6rem"}}><b>4 <i class="far fa-surprise"></i> 4</b></h1>
                <small style={{color:"mediumseagreen"}}>Seems like you went into some wrong direction</small>
               <br></br> <small>Want to headback to Homepage</small>
               <br></br> <a href="/" style={{fontSize:"1.5rem"}}>Homepage</a>
              
              </div>}
              {matches.medium &&<div style={{textAlign:"center",padding:"45px"}}>
                <h1 style={{fontSize:"6rem"}}><b>4 <i class="far fa-surprise"></i> 4</b></h1>
                <small style={{color:"mediumseagreen"}}>Seems like you went into some wrong direction</small>
               <br></br> <small>Want to headback to Homepage</small>
               <br></br> <a href="/" style={{fontSize:"1.5rem"}}>Homepage</a>
              
              </div>}
              {matches.large &&<div style={{textAlign:"center",padding:"45px"}}>
                <h1 style={{fontSize:"10rem"}}><b>4 <i class="far fa-surprise"></i> 4</b></h1>
                <small style={{color:"mediumseagreen",fontSize:"1.5rem"}}>Seems like you went into some wrong direction</small>
               <br></br> <small  style={{fontSize:"1.5rem"}}>Want to headback to Homepage</small>
             <br></br> <a href="/" style={{fontSize:"1.5rem"}}>Homepage</a>
              
              </div>}
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}
export default Nomatch;