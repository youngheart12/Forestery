import React, { Component } from 'react'
import CompleteHeader from '../CompleteHeader/completeheader';
import 
{Row, Col,  Button,NavLink} from 'reactstrap';
import Counter from '../../Counter/counter';
import Feedback from '../Feeback/feedback';
import Footer from '../Footer/footer';
import LastFooter from '../Footer/lastFooter';
import './layout.css';
import Typist from 'react-typist';
import Small from '../Dashboard/smallcomp';
import History from '../History/history'
import Article from '../Article/article';
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
          <Col md="6" xs="6" sm="6">
            <div style={{ padding: "40% 10%" }}>
              <h1 style={{ fontSize: "4rem", letterSpacing: "2px" }}>Human causes of wildfire Ignition</h1>
            </div>
          </Col>
          <Col md="6" xs="6" sm="6" style={{ padding: "0px", margin: "0px" }}>
            <div style={{ padding: "4px" }} className="imgStyle">
              {/* <img src="https://placeimg.com/300/250/any" width="300" height="250" class="responsive" id="img1" ></img>
              <img src="https://placeimg.com/250/200/any" id="img2"></img>
              <img src="https://placeimg.com/250/200/any" id="img3"></img>
              <img src="https://placeimg.com/300/250/any" id="img4"></img> */}
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
          <Col md="6" sm="6" xs="12" style={{ borderRight: "1px solid black" }} className="textHelp">
            <div style={{ textAlign: "center", padding: "5%", color: "#353b48" }} >
              <h2>Be an active member</h2>

              <p style={{ fontSize: "1.5rem" }}> Prevntion is always better the Lorem ipsum  sed do eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            </div>
          </Col>
          <Col md="6" sm="6" xs="12" className="textHelp">
            <div style={{ textAlign: "center", padding: "5%", color: "#273c75" }}>
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
        <History></History>
        <br></br><br></br><br></br><br></br><br></br><br></br>
              <Article></Article>
    <br></br><br></br>
        <Footer></Footer>
        <LastFooter></LastFooter>
        {/* bejff */}
      </div>
    )
  }
}

export default layout
