import React,{Component,Fragment} from 'react';
import CompleteHeader from '../CompleteHeader/completeheader';
import Footer from '../Footer/footer';
import LastFooter from '../Footer/lastFooter';
import Team from '../Team/team';
import './Wissen.css';
import {Row,Col ,Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button,Jumbotron} from 'reactstrap';
import Typist from 'react-typist';
import Media from 'react-media';
class About extends Component
{
    render()
    {
        return (
            <div>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small &&<div>
                  <CompleteHeader></CompleteHeader>
                  <div className="about-cover">
                <div className="textPart">
                <Typist> <p className="main_text">We have a great dedicated Team</p></Typist>
          </div>
            </div>
            <br></br><br></br>
            <div style={{margin:" 15px 35px"}}>
            <Jumbotron style={{backgroundColor:"#FFFD82",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"}}> 
        <h4>Vision</h4>
        <p className="lead">Our vision is to control and take prevention the forest wildfire with the help of our designed platform.</p>
      
      </Jumbotron>
      <Jumbotron style={{backgroundColor:"#C2F39F" ,boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"}}>
        <h4>Mission</h4>
        <p className="lead">Our mission is to become the world's largest Forest Fire Prevention Commitee using today technologies.</p>
      
      </Jumbotron>
      <Jumbotron style={{backgroundColor:"#BAA5FF",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"}}>
        <h4>Values</h4>
        <p className="lead">We value and respect to our young and talented team members who works with honesty and enthusiasm.</p>
      
      </Jumbotron>
      </div>
              </div>}
              {matches.medium && <p>I am medium!</p>}
              {matches.large && <div>
          <CompleteHeader></CompleteHeader>
            <div className="about-cover">
                <div className="textPart">
                <Typist> <p className="main_text">We have a great dedicated Team</p></Typist>
          </div>
            </div>
<br></br><br></br><br></br>
            <div className="our-company">
            <Row>
                <Col md="12" xs="12" className="company-heading">
                <h1><b>Our Company</b></h1>
                </Col>
            </Row>
            <Row>
                <Col md={{size:3, offset:1}} xs="12" className="box">
                <Col md={{size:12}} className="inBox"> Vision </Col>
                    <p>Our vision is to control and take prevention the forest wildfire with the help of our designed platform.</p>
                </Col>
                <Col md="3" xs="12" className="box">
                <Col md={{size:12}} className="inBox"> Mission </Col>
                    <p>Our mission is to become the world's largest Forest Fire Prevention Commitee using today technologies.</p>
                </Col>
                <Col md="3" xs="12" className="box">
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
             Name="Ravi Mohan Singh"
             Age="20"
             Email="ravimohan20@gmail.com"
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
      </div>}
            </Fragment>
          )}
        </Media>
      </div>
      
        );
    }
}
export default About;