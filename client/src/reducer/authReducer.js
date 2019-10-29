import {USER_LOADING,REGISTER_FAIL,REGISTER_SUCCESS,LOGIN_SUCCESS,LOGOUT_SUCCESS, REGISTER_NEW_SUCCESS, LOGIN_FAIL} from '../action/types';
const initialState={
    isLoading:false,
    isAuthenticated:false,
    user:null,
    filled:false,
    error:null
};
export default function(state=initialState,action)
{
    switch(action.type)
    {
        case USER_LOADING:
            return {
                ...state,
                isLoading:true
            }
            case LOGIN_SUCCESS:
                case REGISTER_SUCCESS:
                  localStorage.setItem('token', action.payload.token);
                  localStorage.setItem('userid',action.payload.user.id);
                  return {
                    ...action.payload,
                    isAuthenticated: true,
                    isLoading: false,
                    
                  }; 
                  case LOGIN_FAIL:
                  case REGISTER_FAIL:    
                      return{
                          ...state,
                          isLoading:false,
                          error:action.payload
                      }
                  case LOGOUT_SUCCESS:
                      {
                        return {
                            ...state,
                            user: null,
                            isAuthenticated: false,
                            isLoading: false
                          };
                      } 
                 case REGISTER_NEW_SUCCESS:{
                     return{
                         ...state,
                         filled:true
                     }
                 }            
        default:
            return state;  
    }
}