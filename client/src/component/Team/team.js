import React from 'react';
import {Row,Col,Button} from 'reactstrap';
import './team.css';
const team=(props)=>{
    return (<div className="page_layout">
        
    <Row className="page_header">
        <Col md={12} className="page_main" style={{backgroundColor:`${props.Color}`}}>
        <Row style={{position:"relative"}}>
        <Col md={4} style={{alignItems:"center",padding:"6%"}}> 
      
       <img src={require('../../Images/demo_image.png') }style={{height:"250px",width:"250px",zIndex:"1",position:"absolute",bottom:"-20px",border:"3px solid white"}}></img>
        </Col>
        <Col md={8} style={{textAlign:"center",padding:"5% 0%"}}>
            <div className="about_name">
           <b>{props.Name}</b> 
        
          <small style={{fontSize:"1.2rem",display:"block"}}>{props.Role}</small>
          <div>
          <div style={{backgroundColor:"white",color:"grey",borderRadius:"50%",display:"inline",padding:"15px",fontSize:"1rem",marginLeft:"5px"}}>
          <i class="fab fa-twitter"></i>
          </div>
          <div style={{backgroundColor:"white",color:"grey",borderRadius:"50%",display:"inline",padding:"15px",fontSize:"1rem",marginLeft:"5px"}}>
          <i class="fab fa-facebook-f"></i>
          </div>
          <div style={{backgroundColor:"white",color:"grey",borderRadius:"50%",display:"inline",padding:"15px",fontSize:"1rem",marginLeft:"5px"}}>
          <i class="fab fa-instagram"></i>
          </div>
          
         </div>
       
            </div>
        </Col>
    </Row>
    </Col>
    <Col md={12} style={{backgroundColor:"white",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}}>
      <Row>
          <Col md={6} style={{padding:"50px"}} >
    <h4 style={{display:"inline"}}>About</h4><h4 style={{display:"inline",color:`${props.Color}`}}> Me</h4><br>
    </br>
    <p style={{fontSize:"1rem"}}>
    Hello! I’m {props.Name}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.
    </p>
    <br></br>
   
          </Col>
          <Col md={6} style={{alignItems:"center",padding:"50px"}}>
    <table>
        <tbody>
        <tr>
            <td>Age</td>
            <td id="desctable">{props.Age}</td>
        </tr>
        <tr>
            <td>Residence</td>
            <td id="desctable">{props.Country}</td>
        </tr>
        <tr>
            <td>Address</td>
            <td id="desctable">{props.City}</td>
        </tr>
        <tr>
            <td>e-mail</td>
            <td id="desctable_" style={{color:`${props.Color}`}}>{props.Email}</td>
        </tr>
        <tr>
            <td>Freelance</td>
            <td id="desctable">Available</td>
        </tr>
        </tbody>
    </table>
          </Col>
      </Row>
    </Col>
    </Row>
    </div>
    
    )
    
}
export default team;