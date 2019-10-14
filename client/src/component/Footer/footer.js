import React,{Component} from 'react';
import './footer.css';
import {NavLink} from 'reactstrap';
import Media from 'react-media';
class Footer extends Component{
    render()
    {
        return(
            <div>
                <Media query="(max-width:800px)">
                    {matches=>matches?(
                        <div className="footerDivmob">
                       
                        <div style={{flexGrow:"3"}}>
                       
                        <ul style={{listStyleType:"none",padding:"0px",margin:"0px"}}>
                            <li><h5 style={{color:"#99B927"}}>Company</h5></li>
                            <li><NavLink href="/aboutus" style={{fontSize:"1rem",color:"#6A6A6A"}}>About us</NavLink></li>
                             <li><NavLink href="/contactus" style={{fontSize:"1rem",color:"#6A6A6A"}}>Contact us</NavLink></li>
                             <li><NavLink href="/work" style={{fontSize:"1rem",color:"#6A6A6A"}}>Work with us</NavLink></li>
                             <li>Press</li>
                             <li>Blog</li>
                             <li>Developers</li> 
                            <br></br>
                            <li><h5 style={{color:"#99B927"}}>More Information</h5></li>
                            <li>FAQ</li>
                             <li>Owner policies</li>
                             <li>Tenant policies</li>
                             <li>Privacy policies</li>  
                        </ul>
            
                        </div>
                        <div style={{flexGrow:"3"}}>
                        <ul style={{listStyleType:"none",padding:"0px",margin:"0px"}}>
                        <li><h5 style={{color:"#99B927"}}>Partner with us</h5></li>
                            <li>For house owners</li>
                            <li>For Large corporations</li>
                            <br></br>
                            <br></br>
                            <li><h5 style={{color:"#99B927"}}>We are social</h5></li>
                    <li id="fb" className="lastglyph"><i class="fab fa-facebook-square"></i></li>
                    <li id="tw" className="lastglyph"><i class="fab fa-twitter"></i></li>
                    <li id="insta" className="lastglyph"><i class="fab fa-instagram"></i></li>
                    <li id="in" className="lastglyph"><i class="fab fa-linkedin"></i></li>
                    <li id="sn" className="lastglyph"><i class="fab fa-snapchat-square"></i></li>
                    <li id="wt" className="lastglyph"><i class="fab fa-whatsapp"></i></li>
                        </ul>
                        </div>
                        
                        </div>


                    ):(
                         <div className="footerDiv">
                           <div style={{flexGrow:"3"}}>
            <h4 style={{color:"#99B927",textDecoration:"underline"}}>Forestery</h4>
            Forest is India's emerging “<span style={{color: "#99B927"}}>Forest Fire Prevention Committee</span>” focussed to control and prevent the forest fire with the help of our designed platform.<br></br>
            Day to day the forest wildfires are increasing drastically which is leading to the major issues to our environment. So, we as a nature lover trying our best to save the world with today's technologies and taking all the measures for the prevention.<br></br>
            Let's we all take a pledge to give everything back that nature has given to us or we had taken from it and save till the last breath.
        </div>
                         <div style={{flexGrow:"3"}}>
                        
                         <ul style={{listStyleType:"none",padding:"0px",margin:"0px"}}>
                             <li><h5 style={{color:"#99B927"}}>Company</h5></li>
                             <li><NavLink href="/aboutus" style={{fontSize:"1rem",color:"#6A6A6A"}}>About us</NavLink></li>
                             <li><NavLink href="/contactus" style={{fontSize:"1rem",color:"#6A6A6A"}}>Contact us</NavLink></li>
                             <li><NavLink href="/work" style={{fontSize:"1rem",color:"#6A6A6A"}}>Work with us</NavLink></li>
                             <li>Press</li>
                             <li>Blog</li>
                             <li>Developers</li>   
                         </ul>
             
                         </div>
                         <div style={{flexGrow:"3"}}>
                         <ul style={{listStyleType:"none",padding:"0px",margin:"0px"}}>
                         <li><h5 style={{color:"#99B927"}}>Partner with us</h5></li>
                             <li>For house owners</li>
                             <li>For Large coperations</li>
                         </ul>
             
                         </div>
                         <div style={{flexGrow:"3"}}>
                         <ul style={{listStyleType:"none",padding:"0px",margin:"0px"}}>
                         <li><h5 style={{color:"#99B927"}}>More Information</h5></li>
                             <li>FAQ</li>
                             <li>Owner policies</li>
                             <li>Tenant policies</li>
                             <li>Privacy policies</li>
                         </ul>
                         </div>
                         </div>


                    )}
                </Media>
            </div>
       
            );
    }
}
export default Footer;