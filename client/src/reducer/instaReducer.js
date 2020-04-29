import {INSTA_DETAIL} from '../action/types';
const initialState={
   instadetail:null
}
export default function(state=initialState,action){
    switch(action.type)
    {
        case INSTA_DETAIL:
            return{
                instadetail:action.value
            }
        default:{
            return state;
        }  
    }
}