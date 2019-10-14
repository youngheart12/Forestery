import React from 'react';
import { Jumbotron, Button,Progress } from 'reactstrap';

const Example = (props) => {
  return (
    <div className="jumbo">
      <Jumbotron style={{padding:"15px",margin:"0px",backgroundColor:`${props.colorname}`}} >
        <img src={require(`../../Images/${props.imagename}`)} style={{width:"100px",height:"100px"}}/>
        <small>{props.data1}</small>
      </Jumbotron>
    </div>
  );
};

export default Example;