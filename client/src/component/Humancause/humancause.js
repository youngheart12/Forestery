import React, { Fragment } from 'react';
import Media from 'react-media';
 import {Row,Col} from 'reactstrap';
class Humancause extends React.Component {
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
              {matches.small && 
            <div>
                <Row style={{backgroundColor: "#FFE347" }}>
                <Col xs={12} style={{textAlign:"center"}}>
                <h3 style={{fontSize:"2.5rem",padding:"25px"}}> Human causes of wildfire Ignition</h3>
                </Col>
                <br></br>
                    <Col xs={4} >
                    <div style={{margin:"30px 20px"}}>
                        <img src={require('../../Images/campfire.svg')} style={{width:"70px",height:"70px"}}></img>
                    </div>
                    </Col>
                    <Col xs={4}>
                    <div style={{margin:"30px 20px"}}>
                        <img src={require('../../Images/electricshock.svg')} style={{width:"70px",height:"70px"}}></img>
                    </div>
                    </Col>
                    <Col xs={4}>
                    <div style={{margin:"30px 20px"}}>
                        <img src={require('../../Images/cigartee.svg')} style={{width:"70px",height:"70px"}}></img>
                    </div>
                    </Col>
                </Row>
            </div>
            }
              {matches.medium && 
             <Row style={{ marginTop: "60px", backgroundColor: "#FFE347" }}>
             <Col md="6" xs="6" sm="6">
               <div style={{ padding: "40% 10%" }}>
                 <h1 style={{ fontSize: "3rem", letterSpacing: "2px" }}>Human causes of wildfire Ignition</h1>
               </div>
             </Col>
             <Col md="6" xs="6" sm="8" style={{ padding: "0px", margin: "0px" }}>
               
             </Col>
           </Row>}
            

              {matches.large &&
              <Row style={{ marginTop: "60px", backgroundColor: "#FFE347" }}>
              <Col md="6" xs="6" sm="6">
                <div style={{ padding: "40% 10%" }}>
                  <h1 style={{ fontSize: "4rem", letterSpacing: "2px" }}>Human causes of wildfire Ignition</h1>
                </div>
              </Col>
              <Col md="6" xs="6" sm="6" style={{ padding: "0px", margin: "0px" }}>
                <div style={{ padding: "60px" }} className="imgStyle">
                  <img src="https://placeimg.com/300/250/any" width="300" height="250" class="responsive" id="img1" ></img>
                  <img src="https://placeimg.com/250/200/any" id="img2"></img>
                  <img src="https://placeimg.com/250/200/any" id="img3"></img>
                  <img src="https://placeimg.com/300/250/any" id="img4"></img>
                </div>
              </Col>
            </Row>}
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}
export default Humancause;