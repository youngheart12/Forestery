import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';

import Signup from './container/Signup/signup';
import Guard from './container/Guard/guard';
import Layout from './component/Layout/layout';
import {loadUser} from './action/authAction/signup';
import {connect} from 'react-redux';
import Dashboard from './component/Dashboard/dashboard';
import Normal from './component/NormalUser/normaluser';
import About from './component/Aboutus/about';
import Contact from './component/Contact/contact';

import PropTypes from 'prop-types';
class App extends Component{
  
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    loadUser:PropTypes.func.isRequired
   
  };
  componentDidMount()
  {
    const data={
      token:localStorage.getItem("token"),
      id:localStorage.getItem("userid")
    }
    this.props.loadUser(data);
  }
  
  render()
  {
    
  return (
    
    <Switch>
<Route path="/" exact component={Layout}></Route>
<Route path="/signup" component={Signup}></Route>
<Route path="/staff" component={Guard}></Route>
<Route path="/dashboard" component={Dashboard}></Route>
<Route path="/normaluser" component={Normal}></Route>
<Route path="/about" component={About}></Route>
<Route path="/contactus" component={Contact}></Route>
    </Switch>
    
  );
}
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps,{loadUser}) (App);
