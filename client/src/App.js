import React,{Component,lazy,Suspense} from 'react';
import {Switch,Route} from 'react-router-dom';

import Guard from './container/Guard/guard';
import Layout from './component/Layout/layout';
import {loadUser} from './action/authAction/signup';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const Dashboard=lazy(()=>import('./component/Dashboard/dashboard'));
const About=lazy(()=>import('./component/Aboutus/about'));
const Normal=lazy(()=>import('./component/NormalUser/normaluser'));
const Contact=lazy(()=>import('./component/Contact/contact'))
const Signup=lazy(()=>import('./container/Authorization/Signup/signup'));
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
    <Suspense fallback={<div>Loading...</div>}>
    <Switch>
<Route path="/" exact component={Layout}></Route>
<Route path="/signup" component={Signup}></Route>
<Route path="/staff" component={Guard}></Route>
<Route path="/dashboard" component={Dashboard}></Route>
<Route path="/normaluser" component={Normal}></Route>
<Route path="/about" component={About}></Route>
<Route path="/contactus" component={Contact}></Route>
    </Switch>
    </Suspense>
  );
}
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps,{loadUser}) (App);
