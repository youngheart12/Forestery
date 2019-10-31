import React,{Fragment} from 'react';
import { Row, Col, Card, CardText,CardImg,CardBody,NavLink,Button } from 'reactstrap';
import Media from 'react-media';
const articles = () => {
    return (
       
        <div>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && 
             <Row style={{margin:"10px"}}>
            <Col xs={12} sm={12} style={{marginBottom:"20px"}}>
                <Card className="box_card">
                    <CardImg top width="100%" src={require('../../Images/beautynature.jpg')} alt="Card image cap" />
                    <CardBody>
                        <p style={{ margin: "0px", padding: "0px" }} className="articleTitle">Beauty of Nature..</p>
                        <CardText>This word is used in a variety of contexts. Perhaps the most important reference is the multiple species of plants, a </CardText>
                        <NavLink href="/" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button></NavLink>
                    </CardBody>
                </Card>
            </Col>
            <Col xs={12} sm={12} style={{marginBottom:"20px"}}>
                <Card className="box_card">
                    <CardImg top width="100%" src={require('../../Images/amazon1.jpg')} alt="Card image cap" />
                    <CardBody>
                        <p style={{ margin: "0px", padding: "0px" }} className="articleTitle">The Fire hasn't stop yet..</p>
                        <CardText>The amazon fire is still present,There were still 19,925 fire outbreaks in September on the Brazilian part of the rainforest</CardText>
                        <NavLink href="/" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button></NavLink>
                    </CardBody>
                </Card>
            </Col>
            <Col xs={12} sm={12} style={{marginBottom:"20px"}}>
                <Card className="box_card">
                    <CardImg top width="100%" src={require('../../Images/travell.jpg')} alt="Card image cap" />
                    <CardBody>
                        <p style={{ margin: "0px", padding: "0px",fontSize:"1.5rem" }} className="articleTitle">Top 10 Forests of India..</p>
                        <CardText>Top 10 forest of india that every adventurer and traveller must visit once in his/her lifr.India is home   </CardText>
                        <NavLink href="/" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button></NavLink>
                    </CardBody>
                </Card>
            </Col>

        </Row>
            
            
            
            }
              {matches.medium && 
               <Row style={{margin:"10px"}}>
               <Col sm={6} style={{marginBottom:"20px"}}>
                   <Card className="box_card">
                       <CardImg top width="100%" src={require('../../Images/beautynature.jpg')} alt="Card image cap" />
                       <CardBody>
                           <p style={{ margin: "0px", padding: "0px" }} className="articleTitle">Beauty of Nature..</p>
                           <CardText>This word is used in a variety of contexts. Perhaps the most important reference is the multiple species of plants, a </CardText>
                           <NavLink href="/" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button></NavLink>
                       </CardBody>
                   </Card>
               </Col>
               <Col  sm={6} style={{marginBottom:"20px"}}>
                   <Card className="box_card">
                       <CardImg top width="100%" src={require('../../Images/amazon1.jpg')} alt="Card image cap" />
                       <CardBody>
                           <p style={{ margin: "0px", padding: "0px" }} className="articleTitle">The Fire hasn't stop </p>
                           <CardText>The amazon fire is there it should not stop yet.According to the newspaper</CardText>
                           <NavLink href="/" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button></NavLink>
                       </CardBody>
                   </Card>
               </Col>
               <Col sm={6} style={{marginBottom:"20px"}}>
                   <Card className="box_card">
                       <CardImg top width="100%" src={require('../../Images/travell.jpg')} alt="Card image cap" />
                       <CardBody>
                           <p style={{ margin: "0px", padding: "0px",fontSize:"1.5rem" }} className="articleTitle">Top 10 Forests of India..</p>
                           <CardText>Top 10 forest of india that every adventurer and traveller must visit once in his/her lifr.India is home   </CardText>
                           <NavLink href="/" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button></NavLink>
                       </CardBody>
                   </Card>
               </Col>
               <Col sm={6} style={{marginBottom:"20px"}}>
                   <Card className="box_card">
                       <CardImg top width="100%" src={require('../../Images/travell.jpg')} alt="Card image cap" />
                       <CardBody>
                           <p style={{ margin: "0px", padding: "0px",fontSize:"1.5rem" }} className="articleTitle">Top 10 Forests of India..</p>
                           <CardText>Top 10 forest of india that every adventurer and traveller must visit once in his/her lifr.India is home   </CardText>
                           <NavLink href="/" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button></NavLink>
                       </CardBody>
                   </Card>
               </Col>
   
           </Row>
              
              
              
              
              }
              {matches.large && 
             <Row style={{ margin: "25px 45px" }} data-aos="zoom-in-up" data-aos-duration="1500">
             <Col md={4} sm={4}  >
                 <Card className="box_card">
                     <CardImg top width="100%" src={require('../../Images/beautynature.jpg')} alt="Card image cap" />
                     <CardBody>
                         <p style={{ margin: "0px", padding: "0px" }} className="articleTitle">Beauty of Nature..</p>
                         <CardText>This word is used in a variety of contexts. Perhaps the most important reference is the multiple species of plants, animals, wildlife, and all that the earth contains from topography such as mountains, valleys, beaches, and </CardText>
                         <NavLink href="/" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button></NavLink>
                     </CardBody>
                 </Card>
             </Col>
             <Col md={4} sm={4} >
                 <Card className="box_card">
                     <CardImg top width="100%" src={require('../../Images/amazon1.jpg')} alt="Card image cap" />
                     <CardBody>
                         <p style={{ margin: "0px", padding: "0px" }} className="articleTitle">The Fire hasn't stop yet..</p>
                         <CardText>The amazon fire is still present,There were still 19,925 fire outbreaks in September on the Brazilian part of the rainforest, which accounts for nearly 65% of the Amazon basin. Moreover, through the first nine months of the year, </CardText>
                         <NavLink href="/" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button></NavLink>
                     </CardBody>
                 </Card>
             </Col>
             <Col md={4} sm={4}>
                 <Card className="box_card">
                     <CardImg top width="100%" src={require('../../Images/travell.jpg')} alt="Card image cap" />
                     <CardBody>
                         <p style={{ margin: "0px", padding: "0px" }} className="articleTitle">Top 10 Forests of India that..</p>
                         <CardText>India is home to some of the finest forests of the world. From lush green pine and dedoar trees to diverse wildlife ranging from tigers to elephants, India’s forests are home to some of the most amazing living species. </CardText>
                         <NavLink href="/" target="_blank"> <Button style={{ backgroundColor: "#6D4D8E", border: "1px solid #6D4D8E", borderRadius: "25px", padding: "10px 30px" }} id="button_style"><h6 style={{ margin: "0px", padding: "0px" }}>Read More</h6></Button></NavLink>
                     </CardBody>
                 </Card>
             </Col>
 
         </Row>
            
            }
            </Fragment>
          )}
        </Media>
      </div>
    )
}
export default articles;