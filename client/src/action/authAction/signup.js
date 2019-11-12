import {REGISTER_SUCCESS,REGISTER_FAIL,LOGOUT_SUCCESS,LOGIN_FAIL,LOGIN_SUCCESS,REGISTER_NEW_SUCCESS,GET_NOTIFICATION} from '../types';

import axios from 'axios';

export const loadUser=({token,id})=>dispatch=>{
  
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ token, id});
    axios.post('/api/access',body,config).then(res =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        })
       
      ).catch((e)=>console.log("no token"))
}
export const register = ({ name, email, password,lat,lon }) => dispatch => {
    // Headers
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
  
    // Request body
    const body = JSON.stringify({ name, email, password,lat,lon });
  
    axios
      .post('/api/signup', body, config)
      .then(res =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        })
       
      )
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload:err.response.data
        });
      });
      
  };
 
  export const logout = () => {
      localStorage.clear();
    return {
      type: LOGOUT_SUCCESS
    };
  }
  

  export const login = ({ email, password }) => dispatch => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({ email, password });
  
    axios
      .post('/api/login', body, config)
      .then(res =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        })
       
      )
      .catch(err => {
        // dispatch(
        //   returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
        // );
        dispatch({
          type: LOGIN_FAIL,
          payload:err.response.data
        });
      });
  };

  export const newRegister=({name,email,observe,describe,lat,lan})=>dispatch=>{
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

  // Request body
  const body = JSON.stringify({ name, email, observe,describe,lat,lan });

 
  axios
    .post('/send/usernotify', body, config)
    .then(res =>
      dispatch({
        type: REGISTER_NEW_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: REGISTER_FAIL
      });
    });
    
  }
  export const getNotified=()=>dispatch=>{
    axios.get('/send/getnotifyAdmin').then(res=>dispatch({
      type:GET_NOTIFICATION,
      payload:res.data
    })).catch((e)=>console.log(e))
  }