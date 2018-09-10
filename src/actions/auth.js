import TYPES from './types';

export const signup = userdata => ({
	type: TYPES.SIGNUP,
	...userdata
});

export const signin = userdata => ({
	type: TYPES.SIGNIN,
	...userdata
});

export const signinSuccess = userdata => ({
	...userdata,
	type: TYPES.SIGNIN_SUCCESS
});

export const signout = () => ({
	type: TYPES.SIGNOUT
});
