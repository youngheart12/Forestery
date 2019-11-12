import React, { Component } from 'react'
import {Row,Col,Jumbotron} from "reactstrap"
export class manipulation extends Component {
  render() {
    return (
      <div style={{margin:"15px"}}>
        <Row>
          <Col md="6">
            <Jumbotron style={{padding:"30px"}}>
              <h1>Confidence</h1>
              <p>
              Confidence values are set to low, nominal and high. Low confidence daytime fire pixels are typically associated with areas of sun glint and lower relative temperature anomaly less than 15k in the mid-infrared channel I4. Nominal confidence pixels are those free of potential sun glint contamination during the day and marked by strong greater then 15k temperature anomaly in either day or nighttime data. 
                </p>
            </Jumbotron>
          </Col>
          <Col md="6">
            <Jumbotron style={{padding:"30px"}}>
              <h1>FRP</h1>
              <p>
              FRP depicts the pixel-integrated fire radiative power in MW (megawatts). Given the unique spatial and spectral resolution of the data, the VIIRS 375 m fire detection algorithm was customized and tuned in order to optimize its response over small fires while balancing the occurrence of false alarms. Frequent saturation of the mid-infrared I4 channel (3.55-3.93 µm) driving the detection of active fires requires additional tests.
              </p>
            </Jumbotron>
          </Col>
        
        </Row>
      </div>
    )
  }
}

export default manipulation
