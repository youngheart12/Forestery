import React, { Component } from 'react'
import {Button,Col,Row,Badge} from 'reactstrap';
import {actAdmin,actNormal} from '../../action/guardAction/guard';
import PropTypes from 'prop-types'
import './guard.css';
import { connect } from 'react-redux';
export class Guard extends Component {
    state={
        normalData:null
    }
    static propTypes = {
        actAdmin:PropTypes.func.isRequired,
        actNormal:PropTypes.func.isRequired,
        admin:PropTypes.object.isRequired
      };
    handleNormal=()=>{
      this.props.actNormal();

    }

   
   
    render() {
        const data=this.props.admin.isLoading?<p>{this.props.admin.normalData[0].note}</p>:<p>not ready</p>
        return (
            <div>
               <Row>
                   <Col md="6">
                    <Button color="success" onClick={this.handleNormal}><Badge color="info">5</Badge>Message From User</Button>
                 {data}
                   </Col>
                   <Col md="6">
                    <Button color="danger" onClick={this.handleAdmin}>Message From Admin<Badge color="info">4</Badge></Button>
                   </Col>
                   </Row> 
            </div>
        )
    }
}
const mapStateToProps = state => ({
    normalData: state.normal,
    admin:state.admin,
  });
export default connect(mapStateToProps,{actNormal,actAdmin})(Guard);
