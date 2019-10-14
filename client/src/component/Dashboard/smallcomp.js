import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
const smallcomp=(props)=>{
    return(<div style={{color:"white"}}>
          <Jumbotron style={{padding:"25px", margin:"0px",backgroundColor:`${props.color}`}} >
      <h2 style={{margin:"0px",fontSize:"3rem",display:"inline"}}>{props.data}</h2>
       <br>
       </br><br></br>
      <img src={require(`../../Images/${props.imgname}.svg`)} style={{width:"100px",height:"100px",display:"inline"}}/>
     <h3 style={{textAlign:"right"}}>{props.type}</h3>
      </Jumbotron>
    </div>)
}
export default smallcomp;