import React,{Component} from 'react';
import './lastFooter.css';
import {Button} from 'reactstrap';
import Media from 'react-media';
class LastFooter extends Component{
    render()
    {
        return(
            <div>
                <Media query="(max-width:800px)">
                    {matches=>
                    matches ? (
                        <div className="lastFootermob">
              <small>&copy; 2019 iRooms Technologies Pvt. Ltd. All rights reserved. </small>
                </div>
                    ):(
                        <div className="lastFooter">
                <div>&copy; 2019 iForestery Technologies Pvt.Ltd.<br></br>All rights reserved. </div>
                <div>We are social <br></br>
                <ul>
                    <li id="fb"><i class="fab fa-facebook-square"></i></li>
                    <li id="tw"><i class="fab fa-twitter"></i></li>
                    <li id="insta"><i class="fab fa-instagram"></i></li>
                    <li id="in"><i class="fab fa-linkedin"></i></li>
                    <li id="sn"><i class="fab fa-snapchat-square"></i></li>
                    <li id="wt"><i class="fab fa-whatsapp"></i></li>
                </ul>
                </div>
                <div>Having trouble? Don't hesitate ! <Button  outline color="secondary" className="footerButton"> Ask Us</Button></div>
            </div>

                    )}
                </Media>
            </div>
            
        );
    }
}
export default LastFooter;