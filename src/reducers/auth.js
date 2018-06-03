import TYPES from "../actions/types";

const initState = {
  loggedIn: false,
  userData: null
}

export default (state = initState, action) => {
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
      return {
        loggedIn: false,
        userData: null
      }
    default:
      return state;
  }
}