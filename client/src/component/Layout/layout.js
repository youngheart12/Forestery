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
import Media from 'react-media';
import Humancause from '../Humancause/humancause';
import Content from '../../content/content';
import Mainpart from '../Mainpart/mainpart';
export class layout extends Component {

  render() {
    return (
      <div >
         <Mainpart></Mainpart>
        
        {/* second part of main div      */}
    

        {/* second part of main div ends here */}
        <br></br><br></br>
        <div style={{ textAlign: "center" }}>
          <p className="main_helpLine" id="getvalue">
            <Typist>How You Can Help Us In Our Journey !</Typist>
          </p>
          <Content></Content>
        </div>
        

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
