import {GET_NORMAL_DATA,GET_ADMIN_DATA} from '../action/types';
const initialState={
    isLoading:false,
    normalData:[],
    adminData:[]
}
export default function(state=initialState,action){
    switch(action.type)
    {
        case GET_NORMAL_DATA:
            return{
                ...state,
                isLoading:true,
                normalData:action.payload
            }
        default:{
            return state;
        }  
    }
}