import React,{Component} from 'react';
import CompleteHeader from '../CompleteHeader/completeheader';
import Footer from '../Footer/footer';
import LastFooter from '../Footer/lastFooter';

import './Wissen.css';
import {Row,Col ,Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button} from 'reactstrap';
class About extends Component
{
    render()
    {
        return (
      <div>
          <CompleteHeader></CompleteHeader>
            <div className="about-cover">
            <img src={require('../../Images/about-cover1.png')} alt="cover-image" id="cover-image"/>
            </div>
<br></br><br></br><br></br>
            <div className="our-company">
            <Row>
                <Col md={{size:12}} className="company-heading">
                <h1><b>Our Company</b></h1>
                </Col>
            </Row>
            <Row>
                <Col md={{size:3, offset:1}} className="box">
                <Col md={{size:12}} className="inBox"> Vision </Col>
                    <p>Our vision is to control and take prevention the forest wildfire with the help of our designed platform.</p>
                </Col>
                <Col md="3" className="box">
                <Col md={{size:12}} className="inBox"> Mission </Col>
                    <p>Our mission is to become the world's largest Forest Fire Prevention Commitee using today technologies.</p>
                </Col>
                <Col md="3" className="box">
                <Col md={{size:12}} className="inBox"> Values </Col>
                    <p>We value and respect to our young and talented team members who works with honesty and enthusiasm.</p>
                </Col>
            </Row>
            </div>

            <div className="our-team">
            <Row>
                <Col md={{size:12}} className="company-heading">
                <h1><b>Meet The Team</b></h1>
                </Col>
            </Row>
            <Row>
                <Col md={{size:12}} style={{marginBottom: "50px"}}>
                    <Col md={{size:4}} className="company-box">
                        <img src={require('../../Images/Saurabhs.png')} style={{height:"200px",width:"200px",margin:"0% 25%",borderRadius:"50%",border:"5px solid white"}}/> 
                    <div style={{width:"200px",margin:"5% 25%",textAlign:"center"}}>
                        <h2>Saurabh Singh</h2>
                        <h5>UI/UX Developer</h5>
                    </div>                   
                    </Col>
                    <Col md={{size:4}} className="company-box">
                    <img src={require('../../Images/Mayank.png')} style={{height:"200px",width:"200px",margin:"0% 25%",borderRadius:"50%",border:"5px solid white"}}/> 
                    <div style={{width:"200px",margin:"5% 25%",textAlign:"center"}}>
                        <h2>Mayank Soni</h2>
                        <h5>UI/UX Developer</h5>
                    </div>
                    </Col>
                    <Col md={{size:4}} className="company-box">
                    <img src={require('../../Images/Dilip.jpeg')} style={{height:"200px",width:"200px",margin:"0% 25%",borderRadius:"50%",border:"5px solid white"}}/> 
                    <div style={{width:"200px",margin:"5% 25%",textAlign:"center"}}>
                        <h2>Dilip Kumar</h2>
                        <h5>Backend Developer</h5>
                    </div>
                    </Col>
                </Col>
                <Col md={{size:12}}>
                <Col md={{size:3, offset:2}} className="company-box">
                        <img src={require('../../Images/Bidiman Roy.jpg')} style={{height:"200px",width:"200px",margin:"0% 25%",borderRadius:"50%",border:"5px solid white"}}/> 
                    <div style={{width:"200px",margin:"5% 25%",textAlign:"center"}}>
                        <h2>Bidhan Roy</h2>
                        <h5>Graphic Designer</h5>
                    </div>                   
                    </Col>
                    <Col md={{size:3, offset:1}} className="company-box">
                    <img src={require('../../Images/Kajanan.png')} style={{height:"200px",width:"200px",margin:"0% 25%",borderRadius:"50%",border:"5px solid white"}}/> 
                    <div style={{width:"200px",margin:"5% 25%",textAlign:"center"}}>
                        <h2>Kajanan Siva</h2>
                        <h5>Backend Developer</h5>
                    </div>
                    </Col>
                </Col>
            </Row>
            </div>
            <Footer></Footer>
            <LastFooter></LastFooter>
      </div>
        );
    }
}
export default About;