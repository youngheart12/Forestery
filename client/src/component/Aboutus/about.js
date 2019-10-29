import React,{Component} from 'react';
import CompleteHeader from '../CompleteHeader/completeheader';
import Footer from '../Footer/footer';
import LastFooter from '../Footer/lastFooter';
import Team from '../Team/team';
import './Wissen.css';
import {Row,Col ,Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button} from 'reactstrap';
import Typist from 'react-typist';
class About extends Component
{
    render()
    {
        return (
      <div>
          <CompleteHeader></CompleteHeader>
            <div className="about-cover">
                <div className="textPart">
                <Typist> <p className="main_text">We have a great dedicated Team</p></Typist>
          </div>
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
            <div style={{backgroundColor:"#F5F5F5"}}>
                <br></br><br></br>
             
            <Team 
            Color="#2ECA7F"
            Name="Dilip Kumar Mahto "
            Age="20"
            Country="India"
            Email="manishkumar199222@gmail.com"
            Role="Backend Developer "
            City="Dhanbad,JH"

            ></Team>
            <br></br><br></br>
            </div>
            <div style={{backgroundColor:"#F5F5F5"}}>
                <br></br><br></br>
            <Team
             Color="#7E6DF6"
             Name="Mayank Soni"
             Age="20"
             Email="mayanksoni2020@gmail.com"
             Country="India"
             Role="Frontend Developer"
             City="JHANSI,UP"></Team>
            <br></br><br></br>
            </div>
            <div style={{backgroundColor:"#F5F5F5"}}>
                <br></br><br></br>
            <Team
             Color="#FF5722"
             Name="Saurabh Singh"
             Age="20"
             Email="saurabhsingh10101@gmail.com"
             Country="India"
             Role="Database Adminstrator"
             City="KANPUR,UP"></Team>
            <br></br><br></br>
            </div>
            <Footer></Footer>
            <LastFooter></LastFooter>
      </div>
        );
    }
}
export default About;