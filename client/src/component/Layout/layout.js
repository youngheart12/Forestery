import React, { Component } from 'react'
import CompleteHeader from '../CompleteHeader/completeheader';
import {
  Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,NavLink,Jumbotron
} from 'reactstrap';
import Counter from '../../Counter/counter';
import Feedback from '../Feeback/feedback';
import Footer from '../Footer/footer';
import LastFooter from '../Footer/lastFooter';
import './layout.css';
import Typist from 'react-typist';
import Small from '../Dashboard/smallcomp';
export class layout extends Component {

  render() {
    return (
      <div >
        <div className="mainPart">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contactus">Contact</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
          </ul>
          <br></br> <br></br> <br></br> <br></br>
          <div>
            <p className="main_quotes" id="getvalue">
              <Typist> " Trees are the Earth’s<br></br>endless effort to speak<br></br> to the listening heaven. "</Typist>
            </p>
          </div>
          <Button className="main_button" style={{ borderRadius: "25px", padding: "10px 20px", margin: "0px 12%", boxShadow: '0 25px 50px -12px rgba(0, 0, 0, .25)', backgroundColor: "#2ed573", border: "1px solid #2ed573" }}>Join Hands To Save</Button>
        </div>
        {/* second part of main div      */}
        <Row style={{ marginTop: "60px", backgroundColor: "#FFE347" }}>
          <Col md={6}>
            <div style={{ padding: "180px 60px" }}>
              <h1 style={{ fontSize: "4rem", letterSpacing: "2px" }}>Human causes of wildfire Ignition</h1>
            </div>
          </Col>
          <Col md={6} style={{ padding: "0px", margin: "0px" }}>
            <div style={{ padding: "4px" }} className="imgStyle">
              <img src="https://placeimg.com/300/250/any" id="img1" ></img>
              <img src="https://placeimg.com/250/200/any" id="img2"></img>
              <img src="https://placeimg.com/250/200/any" id="img3"></img>
              <img src="https://placeimg.com/300/250/any" id="img4"></img>
            </div>
          </Col>
        </Row>

        {/* second part of main div ends here */}
        <br></br><br></br>
        <div style={{ textAlign: "center" }}>
          <p className="main_helpLine" id="getvalue">
            <Typist>How You Can Help Us In Our Journey !</Typist>
          </p>
        </div>
        <Row>
          <Col md={6} style={{ borderRight: "1px solid black" }} className="textHelp">
            <div style={{ textAlign: "center", padding: "40px", color: "#353b48" }} >
              <h2>Be an active member</h2>

              <p style={{ fontSize: "1.5rem" }}> Prevntion is always better the Lorem ipsum  sed do eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            </div>
          </Col>
          <Col md={6} className="textHelp">
            <div style={{ textAlign: "center", padding: "40px", color: "#273c75" }}>
              <h2>Be an active Socialist</h2>

              <p style={{ fontSize: "1.5rem" }}> Prevntion is always better the Lorem ipsum  sed do eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            </div>
          </Col>
        </Row>

        <div style={{textAlign:"center",marginTop:"5%"}}>
          <h2>Recent Forest Fire</h2>
        </div>
        {/* making history div */}
        <br></br>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button style={{ backgroundColor: "#6200EA", border: "1px solid #6200EA", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>2019</h6></Button>
        </div>
        <Row style={{ margin: "0px 80px" }}>
          <Col md={6} style={{ borderRight: "2px dotted #6d4d8e", position: "relative" }}>
            <div className="dot"></div>


            <div className="dateDisplay">
              <b>14 APRIL 2016</b>
              <hr></hr>
            </div>

            <div>

              <br></br><br></br><br></br><br></br>
              <div style={{ padding: "0% 16%",marginTop:"10%" }}>


                <div className="image-box">
                  <img src={require('../../Images/forestfirepic.jpg')} style={{width:"409px",height:"272px"}}></img>
                </div>

                <div style={{ borderBottom: "2px solid grey" }}>
                  <p style={{ color: "grey", fontSize: "0.8rem", letterSpacing: "1px" }}><i class="fas fa-fire"></i>  Uttarkhand Tradegy</p>
                </div>
                <br></br>
                <div>
                  <h4>Uttarakhand forest Fires</h4>
                </div>
                <div>
                  <p style={{ color:"grey", fontSize: "1rem", letterSpacing: "1px" }}>
                  The forest department estimated that 3,500 hectares (8,600 acres) of forest had been burnt.Nearly 1,600 incidents of fires were detected which were brought under control by 2 May.
  </p>
                </div>
                <br></br>
               <NavLink href="https://en.wikipedia.org/wiki/2016_Uttarakhand_forest_fires" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button></NavLink>
                <hr style={{ marginTop: "35px" }}></hr>
                {/* ending div is for header */}
                <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "10px" }} id="button_style">Forest</Button>
                <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "10px" }} id="button_style">WildFire</Button>
                <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "10px" }} id="button_style">State</Button>

              </div>
            </div>
          </Col>

          {/* left part end hers */}

          <Col md={6} >
      <div className="rightDot"></div>
      <div className="dateDisplayRight">
              <b>15 AUGUST 2019</b>
              <hr></hr>
            </div>
         
              <div style={{ padding: "0% 16%" ,marginTop:"95%"}}>


                <div className="image-box">
                  <img src={require("../../Images/forestfirepic2.jpg")} style={{width:"409px",height:"272px"}}></img>
                </div>

                <div style={{ borderBottom: "2px solid grey" }}>
                  <p style={{ color: "grey", fontSize: "0.8rem", letterSpacing: "1px" }}><i class="fas fa-fire"></i> Amazon Forest Tradegy</p>
                </div>
                <br></br>
                <div>
                  <h4>Amazon rainforest wildfires</h4>
                </div>
                <div>
                  <p style={{ color: "grey", fontSize: "1rem", letterSpacing: "1px" }}>
                  The Amazon, the world's most biodiverse rainforest, was burning at a rate not seen in almost a decade. It was decried as a global tragedy.
  </p>
                </div>
                <br></br>
                <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button>
                <hr style={{ marginTop: "35px" }}></hr>
                {/* ending div is for header */}
                <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "10px" }} id="button_style">Forest</Button>
                <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "10px" }} id="button_style">WildFire</Button>
                <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "10px" }} id="button_style">State</Button>

              </div>
          </Col>
        </Row>
        <br></br><br></br><br></br><br></br><br></br><br></br>
<Row style={{margin:"25px 45px"}}>
  <Col md={4}>
  <Card className="box_card">
        <CardImg top width="100%" src={require('../../Images/beautynature.jpg')} alt="Card image cap" />
        <CardBody>
       <p style={{margin:"0px",padding:"0px"}} className="articleTitle">Beauty of Nature..</p>
          <CardText>This word is used in a variety of contexts. Perhaps the most important reference is the multiple species of plants, animals, wildlife, and all that the earth contains from topography such as mountains, valleys, beaches, and seas. , And forests.</CardText>
          <NavLink href="/" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button></NavLink>
        </CardBody>
      </Card>
  </Col>
  <Col md={4}>
  <Card className="box_card"> 
  <CardImg top width="100%" src={require('../../Images/amazon1.jpg')} alt="Card image cap" />
        <CardBody>
        <p style={{margin:"0px",padding:"0px"}} className="articleTitle">The Fire hasn't stop yet..</p>
          <CardText>The amazon fire is still present,There were still 19,925 fire outbreaks in September on the Brazilian part of the rainforest, which accounts for nearly 65% of the Amazon basin. Moreover, through the first nine months of the year, </CardText>
          <NavLink href="/" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button></NavLink>
        </CardBody>
      </Card>
  </Col>
  <Col md={4}>
  <Card className="box_card">
  <CardImg top width="100%" src={require('../../Images/travell.jpg')} alt="Card image cap" />
        <CardBody>
        <p style={{margin:"0px",padding:"0px"}} className="articleTitle">Top 10 Forests of India that..</p>
          <CardText>India is home to some of the finest forests of the world. From lush green pine and dedoar trees to diverse wildlife ranging from tigers to elephants, India’s forests are home to some of the most amazing living species. </CardText>
          <NavLink href="/" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button></NavLink>
        </CardBody>
      </Card>
  </Col>
  
</Row>
    <br></br><br></br>
        <Footer></Footer>
        <LastFooter></LastFooter>
        {/* bejff */}
      </div>
    )
  }
}

export default layout
