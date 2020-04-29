import axios from "axios";
import {INSTA_DETAIL} from '../types';
export const instagramFunction=({email,password})=>dispatch=>{
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ email,password});
      axios.post('/api/instagram',body,config).then(res=>{
          dispatch({
              type:INSTA_DETAIL,
              value:res.data
          })
      })
};