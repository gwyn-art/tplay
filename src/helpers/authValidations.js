export function checkUsername(username, errors) {
	if (!username) {
		errors.username = 'Required';
	} else if (username.length < 3) {
		errors.username = 'Need to be at least 3 chars';
	} else {
		delete errors.username;
	}

	return errors;
}

export function checkEmail(email, errors) {
	if (!email) {
		errors.userEmail = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
		errors.userEmail = 'Not email format';
	} else {
		delete errors.userEmail;
	}

	return errors;
}

export function checkPassword(pass, errors) {
	if (!pass) {
		errors.userPassword = 'Required';
	} else if (pass.length < 8) {
		errors.userPassword = 'Need to be at least 8 chars';
	} else {
		delete errors.userPassword;
	}

	return errors;
}
