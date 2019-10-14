import React, { Component } from 'react'
import axios from 'axios'
import {getNotified} from '../../action/authAction/signup';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
export class manipulation extends Component {
    handleNotification=()=>{
        this.props.getNotified();
        console.log("reached")
    }
    static propTypes = {
        getNotified:PropTypes.func.isRequired,
       auth:PropTypes.bool
       };
    render() {
        return (
            <div>
              <Button onClick={this.handleNotification}>Notification</Button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
  export default connect(
    mapStateToProps,
    { getNotified }
  )(manipulation);
