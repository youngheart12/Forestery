import React,{Component} from 'react';
import Header from '../Header/header';
import{connect} from 'react-redux';
import LoginHeader from '../LoginHeader/loginheader'
import PropTypes from 'prop-types';
class completeHeader extends Component{
    static propTypes = {
        auth: PropTypes.bool
      };
    
    render()
    {
      
        
        return (<div>
            {this.props.auth?<LoginHeader></LoginHeader>:<Header></Header>}
        </div>);
    }
}
const mapStateToProps = state => ({
    auth: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps,null)(completeHeader);