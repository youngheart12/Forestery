import React, { Component } from 'react'
import CompleteHeader from '../CompleteHeader/completeheader';
import{Row,Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import Counter from '../../Counter/counter';
import Feedback from '../Feeback/feedback';
import Footer from '../Footer/footer';
import LastFooter from '../Footer/lastFooter';
import './layout.css';
export class layout extends Component {
    render() {
        return (
            <div>
            <CompleteHeader></CompleteHeader>
                {/* no above */}
                <div class="container-fluid">
   <Row>
        <Col md="12" id="inner-container">
           
         <div class="inner-quote">
                <h2>Don't Make Trees Rare,</h2>
                <h1>Keep Them With Care</h1>
                <a href="#" class="btn" id="button-one">Explore More</a>
            </div>
            {/* <div style={{textAlign:"left",margin:"0px 25px"}}>
              <h1>Don't Make Trees Rare</h1>
              <h2>Keep them with Care</h2>
            </div> */}
        </Col>
    </Row>
</div>
{/* above this */}
<div style={{textAlign:"center" ,margin:"40px 0px"}}> 
    <h2>Three stages of fire</h2>
</div>
<div style={{margin:"30px 30px"}}>
<Row style={{padding:"10px 30px"}}>

        <Col md="4" sm="4" style={{padding:"0px 30px"}}>
        <Card className="Card">
        <CardImg top width="100%" src={require('../../Images/first.jpg')} alt="Card image cap" />
        <CardBody>
          <CardTitle><h5>Incipient & Growth</h5></CardTitle>
     
          <CardText>This first stage begins when heat, oxygen and a fuel source combine and have a chemical reaction resulting in fire.</CardText>
      
        </CardBody>
      </Card>
        </Col>
        <Col md="4" sm="4" style={{padding:"0px 30px"}}>
        <Card className="Card">
        <CardImg top width="100%" src={require('../../Images/second.jpg')} alt="Card image cap" style={{height:"238px"}} />
        <CardBody>
          <CardTitle><h5>Fully Developed</h5></CardTitle>
        
          <CardText> When the growth stage has reached its max and all combustible materials have been ignited, a fire is considered fully developed.</CardText>
        
        </CardBody>
      </Card>
        </Col>
        <Col md="4" sm="4" style={{padding:"0px 30px"}}>
        <Card className="Card">
        <CardImg top width="100%" src={require('../../Images/third.jpg')} alt="Card image cap" />
        <CardBody>
          <CardTitle><h5>Getting Decay</h5></CardTitle>
        
          <CardText>Usually the longest stage of a fire, the decay stage is characterized a significant decrease in oxygen or fuel, putting an end to the fire.</CardText>
       
        </CardBody>
      </Card>
        </Col>

</Row>
</div>
<div style={{margin:"30px"}}>
<Counter  checkRun={true}
valueCount="25"
  valueCount1="280"
  valueCount2="560"
  valueCount3="750"></Counter>

</div>
<Feedback></Feedback>
<Footer></Footer>
<LastFooter></LastFooter>
{/* bejff */}
            </div>
        )
    }
}

export default layout
