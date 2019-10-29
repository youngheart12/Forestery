import React, { Fragment } from 'react';
import Media from 'react-media';
 import {Row,Col} from 'reactstrap';
class Content extends React.Component {
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
            <Row>
                
            </Row>
            
            
            
            }
              {matches.medium && 
            
            <Row style={{marginTop:"25px"}}>
          <Col  sm="6"  style={{ borderRight: "1px solid black" }} className="textHelp">
            <div style={{ textAlign: "center", padding: "5%", color: "#353b48" }} >
              <h2>Be an active member</h2>

              <p style={{ fontSize: "1.5rem" }}> Prevntion is always better the Lorem ipsum  sed do eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            </div>
          </Col>
          <Col  sm="6"  className="textHelp">
            <div style={{ textAlign: "center", padding: "5%", color: "#273c75" }}>
              <h2>Be an active Socialist</h2>

              <p style={{ fontSize: "1.5rem" }}> Prevntion is always better the Lorem ipsum  sed do eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            </div>
          </Col>
        </Row>
            
            }
              {matches.large &&
            <Row>
            <Col md="6"  style={{ borderRight: "1px solid black" }} className="textHelp">
              <div style={{ textAlign: "center", padding: "5%", color: "#353b48" }} >
                <h2>Be an active member</h2>
  
                <p style={{ fontSize: "1.5rem" }}> Prevntion is always better the Lorem ipsum  sed do eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              </div>
            </Col>
            <Col md="6"  className="textHelp">
              <div style={{ textAlign: "center", padding: "5%", color: "#273c75" }}>
                <h2>Be an active Socialist</h2>
  
                <p style={{ fontSize: "1.5rem" }}> Prevntion is always better the Lorem ipsum  sed do eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              </div>
            </Col>
          </Row>
            
            }
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}
export default Content;