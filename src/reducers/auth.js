import TYPES from "../actions/types"
import {authRef} from '../database/firebase'

const initState = {
  loggedIn: false,
  userData: null
}

export default (state = initState, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case TYPES.SIGNUP_SUCCESS:
      return {
        loggedIn: true, 
        userData: action
      }
    case TYPES.SIGNIN_SUCCESS:
      return {
        loggedIn: true, 
        userData: action
      }
    case TYPES.SIGNOUT:
      authRef.signOut()
      
      return {
        loggedIn: false,
        userData: null
      }
    default:
      return state;
  }
}