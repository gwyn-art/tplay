import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { checkEmail, checkPassword } from '../../../helpers/authValidations';

import DataField from '../../elementary/DataField';

class SignIn extends Component {
	render() {
		const { handleSubmit, signinError } = this.props;

		return (
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="userEmail">Email</label>
					<Field
						onChange={e => this.setState({ email: e.target.value })}
						name="userEmail"
						component={DataField}
						type="email"
					/>
				</div>
				<div>
					<label htmlFor="userPassword">Password</label>
					<Field
						onChange={e => this.setState({ password: e.target.value })}
						name="userPassword"
						component={DataField}
						type="password"
					/>
				</div>
				<button type="submit">Submit</button>
				<p> {signinError} </p>
			</form>
		);
	}
}

SignIn = reduxForm({
	form: 'singin',
	validate: data => {
		let errors = {},
			{ userEmail, userPassword } = data;

		errors = checkEmail(userEmail, errors);
		errors = checkPassword(userPassword, errors);

		return errors;
	}
})(SignIn);

const mapStateToProps = (state, ownProps) => {
	return {
		signinError: state.auth.errors.signin
	};
};

export default connect(mapStateToProps)(SignIn);
