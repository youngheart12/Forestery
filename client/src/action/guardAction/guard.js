import {GET_ADMIN_DATA,GET_NORMAL_DATA} from '../types';
import axios from 'axios';
export const actNormal=()=>dispatch=>{
    axios.get('/send/getNotifyAdmin').then(res=>{
        dispatch({
            type:GET_NORMAL_DATA,
            payload:res.data
        })
    }).catch((e)=>console.log(e));
}
export const actAdmin=()=>{
    console.log("hitted here")
}