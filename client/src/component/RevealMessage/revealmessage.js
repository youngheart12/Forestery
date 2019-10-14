import React from 'react';
const singleCard=(props)=>{
    return(<div>
<Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.describe}</CardSubtitle>
          <CardText>{props.observe}.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>
    )
}
export default singleCard;