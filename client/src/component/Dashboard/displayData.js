import React, { Component } from 'react'
import './dashboard.css';
import WOW from "wowjs";
import axios from 'axios'
import {
    Card,  CardBody,
 Row,Col,Badge
  } from 'reactstrap';
  import Small from './smalljumbo';
  import {getNotified} from '../../action/authAction/signup'
  import {connect} from 'react-redux';
  import PropTypes from 'prop-types';
export class displayData extends Component {
    state={
        message:null,
        percent:0
    }
    static propTypes = {
     getNotified:PropTypes.func.isRequired,
     doNotified:PropTypes.bool
    };
    componentDidMount()
    {
  
            const wow = new WOW.WOW();
            wow.init();
       
        axios.get('/data/apidata').then((res)=>{
if(res.data)
{
    this.setState({
        message:res.data.message,
        percent:res.data.percent
    })
}
        })
       
    }
    render() {
        console.log(this.state)
        return (
            <div>
      <Card style={{padding:"45px"}}>
       <Row>
           <Col md="6">
        <div className="circle-wrap" style={{display:"inline"}}>
            <div className="circle">
              
              <div className="mask full">
                <div className="fill"></div>
              </div>
             
              <div className="mask half">
                <div className="fill"></div>
              </div>
              
              <div className="inside-circle">
                10%
              </div>
              
            </div>
            </div>
            </Col>
            <Col md="6">
            <div className="wow fadeInDown"  >
                            {this.props.firedata.firestatus?<div><h2><Badge color="danger"  style={{padding:"40px",cursor:"pointer"}}>{this.props.firedata.firestatus} Fire </Badge></h2>
                          
                            </div>:<div><h2><Badge color="danger"  style={{padding:"40px",cursor:"pointer"}}>No Fire In Your Area </Badge></h2>
                          
                          </div>}
                            </div>
            </Col>

            </Row>
            <br></br><br></br><br></br><br></br><br></br>
        <CardBody style={{marginTop:"60px"}}>
          
          <Row>
              <Col md="3">
                <Small imagename="fire1.svg" data1="5"></Small>
              </Col>
              <Col md="3">
              <Small imagename="cloudy.svg" data1={this.props.firedata.clouddesc}></Small> 
              </Col>
              <Col md="3">
              <Small imagename="map.svg" data1={this.props.firedata.cityname}></Small>
              </Col>
              <Col md="3">
              <Small imagename="global-warming.svg" data1="35"></Small>
              </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
            
           
            
        )
    }
}

export default connect(null,{getNotified})(displayData)
