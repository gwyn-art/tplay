import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/Home';
import CreateInvite from './pages/CreateInvite';
import Header from './components/complete/Header';

import { signinSuccess, signout } from './actions/auth';
import { authRef } from './database/firebase';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		authRef.onAuthStateChanged(user => {
			if (user && user.emailVerified) {
				this.props.signinSuccess(user.providerData[0]);
			} else {
				signout();
			}
		});
	}

	render() {
		const { loggedIn } = this.props;

		return (
			<div className="App">
				{loggedIn ? (
					<div>
						<Header />
						<Route exact path="/" render={() => <CreateInvite {...this.props} />} />
					</div>
				) : (
					<Route exact path="/" render={() => <Home {...this.props} />} />
				)}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		loggedIn: state.auth.loggedIn
	};
};

const mapDispatchToProps = {
	signinSuccess,
	signout
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
