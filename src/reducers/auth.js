import TYPES from "../actions/types"
import {authRef} from '../database/firebase'

const initState = {
  loggedIn: false,
  userData: null,
  emailSend: false,
  errors: {
    signup: '',
    signin: ''
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.SIGNUP_SUCCESS:
      return {
        emailSend: true,
        errors: initState.errors
      }
      break;

    case TYPES.SIGNUP_ERROR:
      return {
        ...state,
        errors: {
          ...initState.errors,
          signup: action.message
        }
      }
      break;

    case TYPES.SIGNIN_SUCCESS:
      return {
        loggedIn: true, 
        userData: action,
        errors: initState.errors
      }
      break;
    
    case TYPES.SIGNIN_ERROR:
      return {
        ...state,
        errors: {
          ...initState.errors,
          signin: action.message
        } 
      }
      break;

    case TYPES.SIGNOUT:
      authRef.signOut()

      return {
        loggedIn: false,
        userData: null,
        errors: initState.errors
      }
      break;

    default:
      return state;
  }
}