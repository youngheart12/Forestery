import React,{Fragment} from 'react';
import {Col,Row,Button,NavLink} from 'reactstrap';
import Media from 'react-media';
import AOS from 'aos';
const history=(props)=>{
    return(
        <div>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && 
                 <Row style={{ margin: "0px 0%" }}>
                 <Col  xs={6}  style={{ borderRight: "2px dotted #6d4d8e", position: "relative" }}>
                   <div className="dot"></div>
       
       
                   <div className="dateDisplay">
                     <b>14 APRIL 2016</b>
                     <hr></hr>
                   </div>
       
                   <div>
       
                <br></br><br></br><br></br>
                     <div style={{ padding: "0% 0%",marginTop:"20%" }}>
       
       
                       <div className="image-box">
                         <img src={require('../../Images/forestfirepic.jpg')} style={{width:"230px",height:"90px"}}></img>
                       </div>
       
                       <div style={{ borderBottom: "2px solid grey" }}>
                         <p style={{ color: "grey", fontSize: "0.8rem", letterSpacing: "1px" }}><i class="fas fa-fire"></i>  Uttarkhand Tradegy</p>
                       </div>
                       <br></br>
                       <div>
                         <h6 style={{margin:"0px",padding:"0px"}}>Uttarakhand forest Fires</h6>
                       </div>
                       <div>
                         <p style={{ color:"grey", fontSize: "0.7rem" }}>
                         The forest department estimated that 3,500 hectares (8,600 acres) of forest had been burnt.Nearly 1,600 incidents of fires were detected.
         </p>
                       </div>
                       <br></br>
                      <NavLink href="https://en.wikipedia.org/wiki/2016_Uttarakhand_forest_fires" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "5px 15px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px",fontSize:"0.8rem" }}>Read More</h6></Button></NavLink>
                       <hr style={{ marginTop: "35px" }}></hr>
                       {/* ending div is for header */}
                       <Button size="sm" style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "5px" }} id="button_style">Forest</Button>
                       <Button size="sm"style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "5px" }} id="button_style">WildFire</Button>
                       
                       <Button size="sm"style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "10px",marginTop:"10px" }} id="button_style">State</Button>
       
                     </div>
                   </div>
                 </Col>
       
                 {/* left part end hers */}
       
                 <Col  xs={6} >
             <div className="rightDot"></div>
             <div className="dateDisplayRight">
                     <b>15 AUGUST 2019</b>
                     <hr></hr>
                   </div>
                <br></br><br></br><br></br><br></br><br></br>
                     <div style={{ padding: "0% 0%" ,marginTop:"95%"}}>
       
                     <br></br><br></br><br></br><br></br><br></br>
                       <div className="image-box">
                         <img src={require("../../Images/forestfirepic2.jpg")} style={{width:"230px",height:"90px"}}></img>
                       </div>
       
                       <div style={{ borderBottom: "2px solid grey" }}>
                         <p style={{ color: "grey", fontSize: "0.8rem", letterSpacing: "1px" }}><i class="fas fa-fire"></i> Amazon Forest Tradegy</p>
                       </div>
                       <br></br>
                       <div>
                         <h6>Amazon rainforest wildfires</h6>
                       </div>
                       <div>
                         <p style={{ color: "grey", fontSize: "0.7rem" ,padding:"0px"}}>
                         The Amazon, the world's most biodiverse rainforest, was burning at a rate not seen in almost a decade. It was decried as a global tragedy.
         </p>
                       </div>
                       <br></br>
                       <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "5px 15px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" ,fontSize:"0.8rem"}}>Read More</h6></Button>
                       <hr style={{ marginTop: "35px" }}></hr>
                       {/* ending div is for header */}
                       <Button size="sm" style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "10px" }} id="button_style">Forest</Button>
                       <Button size="sm" style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "10px" }} id="button_style">WildFire</Button>
                       <Button size="sm" style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "10px",marginTop:"10px" }} id="button_style">State</Button>
       
                     </div>
                 </Col>
               </Row>
            
            
            
            
            
            }
              {matches.medium &&
                 <Row style={{ margin: "0px 0%" }}>
                 <Col  xs={6}  style={{ borderRight: "2px dotted #6d4d8e", position: "relative" }}>
                   <div className="dot"></div>
       
       
                   <div className="dateDisplay">
                     <b>14 APRIL 2016</b>
                     <hr></hr>
                   </div>
       
                   <div>
       
                <br></br><br></br><br></br>
                     <div style={{ padding: "0% 10%",marginTop:"20%" }}>
       
       
                       <div className="image-box">
                         <img src={require('../../Images/forestfirepic.jpg')} style={{width:"230px",height:"150px"}}></img>
                       </div>
       
                       <div style={{ borderBottom: "2px solid grey" }}>
                         <p style={{ color: "grey", fontSize: "0.8rem", letterSpacing: "1px" }}><i class="fas fa-fire"></i>  Uttarkhand Tradegy</p>
                       </div>
                       <br></br>
                       <div>
                         <h6 style={{margin:"0px",padding:"0px"}}>Uttarakhand forest Fires</h6>
                       </div>
                       <div>
                         <p style={{ color:"grey", fontSize: "0.7rem" }}>
                         The forest department estimated that 3,500 hectares (8,600 acres) of forest had been burnt.Nearly 1,600 incidents of fires were detected.
         </p>
                       </div>
                       <br></br>
                      <NavLink href="https://en.wikipedia.org/wiki/2016_Uttarakhand_forest_fires" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "5px 15px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px",fontSize:"0.8rem" }}>Read More</h6></Button></NavLink>
                       <hr style={{ marginTop: "35px" }}></hr>
                       {/* ending div is for header */}
                       <Button size="sm" style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "5px" }} id="button_style">Forest</Button>
                       <Button size="sm"style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "5px" }} id="button_style">WildFire</Button>
                       
                       <Button size="sm"style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "10px"}} id="button_style">State</Button>
       
                     </div>
                   </div>
                 </Col>
       
                 {/* left part end hers */}
       
                 <Col  xs={6} >
             <div className="rightDot"></div>
             <div className="dateDisplayRight">
                     <b>15 AUGUST 2019</b>
                     <hr></hr>
                   </div>
                <br></br><br></br><br></br><br></br><br></br>
                     <div style={{ padding: "0% 10%" ,marginTop:"95%"}}>
       
                     <br></br><br></br><br></br><br></br><br></br>
                       <div className="image-box">
                         <img src={require("../../Images/forestfirepic2.jpg")} style={{width:"230px",height:"150px"}}></img>
                       </div>
       
                       <div style={{ borderBottom: "2px solid grey" }}>
                         <p style={{ color: "grey", fontSize: "0.8rem", letterSpacing: "1px" }}><i class="fas fa-fire"></i> Amazon Forest Tradegy</p>
                       </div>
                       <br></br>
                       <div>
                         <h6>Amazon rainforest wildfires</h6>
                       </div>
                       <div>
                         <p style={{ color: "grey", fontSize: "0.7rem" ,padding:"0px"}}>
                         The Amazon, the world's most biodiverse rainforest, was burning at a rate not seen in almost a decade. It was decried as a global tragedy.
         </p>
                       </div>
                       <br></br>
                       <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "5px 15px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" ,fontSize:"0.8rem"}}>Read More</h6></Button>
                       <hr style={{ marginTop: "35px" }}></hr>
                       {/* ending div is for header */}
                       <Button size="sm" style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "10px" }} id="button_style">Forest</Button>
                       <Button size="sm" style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "10px" }} id="button_style">WildFire</Button>
                       <Button size="sm" style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "5px", marginRight: "10px" }} id="button_style">State</Button>
       
                     </div>
                 </Col>
               </Row>
            }

              {/* large start */}
              {matches.large && 
             <Row style={{ margin: "0px 10%" }}>
             <Col md={6} xs={6} sm={6} style={{ borderRight: "2px dotted #6d4d8e", position: "relative" }} data-aos="fade-right" data-aos-duration="1500">
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
   
             <Col md={6} xs={6} sm={6} data-aos="fade-up-left" data-aos-duration="3000" >
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
            
            
            
            }
            </Fragment>
          )}
        </Media>
      </div>



       
    )
}
export default history;