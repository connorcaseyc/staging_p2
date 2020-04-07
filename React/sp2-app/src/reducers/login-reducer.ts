import { IUserState } from ".";
import { loginTypes } from '../action-mappers/login-actions';

const initialState:IUserState = {
    currentUser: {
        id: 0,
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        email: '',
        bio: '',
        profpic: '',
        user_posts: []
    }, 
    loginMessage: ''
}

export const loginReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case loginTypes.SUCCESSFUL_LOGIN:{
            return {
                ...state,
                currentUser:action.payload.currentUser,
                loginMessage: 'You have Logged in'
            }
        }
        case loginTypes.UNSUCCESSFUL_LOGIN: {
            return {
                ...state,
                loginMessage:action.payload.loginMessage
            }
        } 
        default:
            return state;
    }
}