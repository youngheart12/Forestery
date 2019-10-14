import React, { Component } from 'react'
import CountUp from 'react-countup';
import {Row,Col,Jumbotron} from 'reactstrap';
import Media from 'react-media';
export class counter extends Component {
    render() {
        return (
            <Media query="(max-width:800px)">
            {matches =>
              matches ? (
                <div style={{marginTop:"60px"}}>
                <Row >
                <Col xs="6" style={{padding:"0px",margin:"0px"}}>
                <Jumbotron style={{backgroundColor:"black",marginBottom:"0px",borderRadius:"0px"}}>
                    <div className="centerDiv" style={{margin:"0px 50px",padding:"0px"}}>
                    <img src={require('../Images/award.svg')} style={{height:"50px"}}></img>
                    </div>
                     <br></br><div style={{textAlign:"center",color:"white"}}>{this.props.checkRun?<h3><CountUp end={this.props.valueCount}/>+</h3>:<h3>{this.props.valueCount}</h3>}</div>
                    <h6 style={{textAlign:"center",color:"#AAF200",fontFamily:"'Lato', sans-serif"}}><small><b>Available Buildings</b></small></h6>
                    </Jumbotron>
                </Col>
                <Col xs="6" style={{padding:"0px"}}>
                <Jumbotron style={{backgroundColor:"black",marginBottom:"0px",borderRadius:"0px"}}>
                <div className="centerDiv" style={{margin:"0px 50px",padding:"0px"}}>
                <img src={require('../Images/award.svg')} style={{height:"50px"}}></img>
                     </div><br></br><div style={{textAlign:"center",color:"white"}}>{this.props.checkRun?<h3><CountUp end={this.props.valueCount1}/>+</h3>:<h3>{this.props.valueCount}</h3>}</div>
                     <h6 style={{textAlign:"center",color:"#AAF200",fontFamily:"'Lato', sans-serif"}}><small><b>Total Rooms</b></small></h6>
                    </Jumbotron>
                </Col>
                </Row>
                <Row>
                <Col xs="6" style={{padding:"0px"}}>
                    <Jumbotron style={{backgroundColor:"black",marginBottom:"0px",borderRadius:"0px"}}>
                    <div className="centerDiv" style={{margin:"0px 50px",padding:"0px"}}>
                    <img src={require('../Images/award.svg')} style={{height:"50px"}}></img>
                    </div> <br></br><div style={{textAlign:"center",color:"white"}}>{this.props.checkRun?<h3><CountUp end={this.props.valueCount2}/>+</h3>:<h3>{this.props.valueCount}</h3>}</div>
                     <h6 style={{textAlign:"center",color:"#AAF200",fontFamily:"'Lato', sans-serif"}}><small><b>Happy tenants</b></small></h6>
                    </Jumbotron>
                    </Col>
                    <Col xs="6" style={{padding:"0px"}}>
                        <Jumbotron style={{backgroundColor:"black",marginBottom:"0px",borderRadius:"0px"}}>
                        <div className="centerDiv" style={{margin:"0px 50px",padding:"0px"}}>
                    <img src={require('../Images/award.svg')} style={{height:"50px"}}></img><br></br>
                    </div> <br></br><div style={{textAlign:"center",color:"white"}}>{this.props.checkRun?<h3><CountUp end={this.props.valueCount3}/>+</h3>:<h3>{this.props.valueCount}</h3>}</div>
                     <h6 style={{textAlign:"center",color:"#AAF200",fontFamily:"'Lato', sans-serif"}}><small><b>Tenants Visit</b></small></h6>
                    </Jumbotron>
                    </Col>
                </Row>
            </div>
              ) : (
                <div style={{margin:"60px 0px",backgroundColor:"black"}}>
                <Row>
                <Col md="3">
                <Jumbotron style={{backgroundColor:"black"}}>
                    <img src={require('../Images/award.svg')} style={{width:"250px",height:"100px"}}></img><br></br>
                     <br></br><div style={{textAlign:"center",color:"white"}}>{this.props.checkRun?<h1><CountUp end={this.props.valueCount}/>+</h1>:<h1>{this.props.valueCount}</h1>}</div>
                    <h4 style={{textAlign:"center",color:"#AAF200",fontFamily:"'Lato', sans-serif"}}><small><b>Winning Awards</b></small></h4>
                    </Jumbotron>
                </Col>
                <Col md="3">
                <Jumbotron style={{backgroundColor:"black"}}>
                <img src={require('../Images/network.svg')} style={{width:"250px",height:"100px"}}></img><br></br>
                     <br></br><div style={{textAlign:"center",color:"white"}}>{this.props.checkRun?<h1><CountUp end={this.props.valueCount1}/>+</h1>:<h1>{this.props.valueCount}</h1>}</div>
                     <h4 style={{textAlign:"center",color:"#AAF200",fontFamily:"'Lato', sans-serif"}}><small><b>Head Count</b></small></h4>
                    </Jumbotron>
                </Col>
                <Col md="3">
                    <Jumbotron style={{backgroundColor:"black"}}>
                    <img src={require('../Images/emoji.svg')} style={{width:"250px",height:"100px"}}></img><br></br>
                     <br></br><div style={{textAlign:"center",color:"white"}}>{this.props.checkRun?<h1><CountUp end={this.props.valueCount2}/>+</h1>:<h1>{this.props.valueCount}</h1>}</div>
                     <h4 style={{textAlign:"center",color:"#AAF200",fontFamily:"'Lato', sans-serif"}}><small><b>Life Saved</b></small></h4>
                    </Jumbotron>
                    </Col>
                    <Col md="3">
                        <Jumbotron style={{backgroundColor:"black"}}>
                    <img src={require('../Images/stats.svg')} style={{width:"250px",height:"100px"}}></img><br></br>
                     <br></br><div style={{textAlign:"center",color:"white"}}>{this.props.checkRun?<h1><CountUp end={this.props.valueCount3}/>+</h1>:<h1>{this.props.valueCount}</h1>}</div>
                     <h4 style={{textAlign:"center",color:"#AAF200",fontFamily:"'Lato', sans-serif"}}><small><b>Reduced Wildfire</b></small></h4>
                    </Jumbotron>
                    </Col>
                </Row>
            </div>
              )
            }
            </Media>
           
        )
    }
}

export default counter
