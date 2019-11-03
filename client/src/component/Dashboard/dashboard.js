import React, { Component } from 'react'
import CompleteHeader from '../CompleteHeader/completeheader';
import {Row,Col,Button} from 'reactstrap';
import Small from './smallcomp';
import axios from 'axios';
import Graph from './graphComp';
import Graph1 from './graphComp1';
import Table from './table';
import Manipulation from './manipulation';
import Display from './displayData';
const api_key="b717d89f8a5c825a2a66fd2440dfcc21";
export class dashboard extends Component {
    state={
        temp:undefined,
    humidity:undefined,
   desc:undefined,
   wind:undefined
    }
    handleLocation=()=>{
        if (!navigator.geolocation) {
            return alert('Geolocation is not supported by your browser.')
        }
navigator.geolocation.getCurrentPosition((position)=>{
    alert(position.coords.latitude)
    alert(position.coords.longitude);
})    
      } 
      componentDidMount()
      {
          if(!navigator.geolocation)
          {
              alert("Turn on the geoloation to get current data");
          }
          navigator.geolocation.getCurrentPosition((position)=>{
              const lat=position.coords.latitude
              const lon=position.coords.longitude
              axios.post(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${api_key}`).then((res)=>{
                  if(res.data)
                  {
                      this.setState({
                          temp:(res.data.main.temp-273.15).toFixed(2),
                          humidity:res.data.main.humidity,
                          wind:res.data.wind.speed,
                          desc:res.data.weather[0].main
                      })
                  }
              })
          })
      }
    render() {
    
        return (
            <div>
             <CompleteHeader></CompleteHeader>
             <div style={{margin:"40px 45px"}}>
             <Row>
                 <Col md="3">
                     <Small 
                     iconname="fas fa-thermometer-quarter"
                     imgname="windmill"
                     color="#57889C"
                     data={this.state.wind?this.state.wind:0.0}
                     type="rpm"
                   ></Small>
                 </Col>
                 <Col md="3">
                 <Small 
                     iconname="fas fa-thermometer-quarter"
                     imgname="hot"
                     color="#E0AC69"
                     data={this.state.temp?this.state.temp:0.0}
                     type="C"
                   ></Small>
                 </Col>
                 <Col md="3">
                 <Small 
                     iconname="fas fa-thermometer-quarter"
                   imgname="rain"
                   color="#1A2732"
                   data={this.state.desc?this.state.desc:0.0}
                   type="mm"></Small>
                 </Col>
                 <Col md="3">
                 <Small 
                     iconname="fas fa-thermometer-quarter"
                  imgname="pot"
                  color="#25C281" 
                  data={this.state.humidity?this.state.humidity:0.0}
                  type="%"></Small>
                 </Col>
             </Row>
             </div>
             
           <Row style={{margin:"0px",padding:"0px"}}>
               <Col md="7">
                   {/* <div style={{backgroundColor:"red",width:"100%",height:"500px"}}></div> */}
              <Display></Display>
               </Col>
               
               <Col md="5" style={{margin:"0px",padding:"0px"}}>
                   <Row>
                       <Col md="12">
                           <Graph datatype="line"></Graph>
                       </Col>
                       <Col md="12">
                           <Graph1 datatype="scatter"></Graph1>
                       </Col>
                       <Col md="12">
                           <Graph datatype="bar"></Graph>
                       </Col>
                       
                   </Row>
               </Col>
            
           </Row>
           <Table></Table>
           <Manipulation></Manipulation>
           <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1cQ1uAajMmEgFEF44e422k-dQnWUMM0Ta" width="100%" height="480"></iframe>
            </div>
        )
    }
}

export default dashboard
