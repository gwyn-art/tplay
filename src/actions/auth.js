import TYPES from './types'

export const signup = (userdata) => ({
    type: TYPES.SIGNUP,
    ...userdata
})

export const signin = (userdata) => ({
    type: TYPES.SIGNIN,
    ...userdata
})

export const signinSuccess = (userdata) => ({
    type: TYPES.SIGNIN_SUCCESS,
    ...userdata
})

export const signout = () => ({
    type: TYPES.SIGNOUT
})