import React, { Component } from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import Home from './pages/Home'

import {signinSuccess, signout} from './actions/auth'
import {authRef} from './database/firebase'

class App extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const {signinSuccess, signout} = this.props
    authRef.onAuthStateChanged(function(user) {
      if (user) {
        signinSuccess(user)
      } else {
        signout()
      }
    });
  }

  render() {
    const {loggedIn} = this.props
    return (
      <div className="App">
        {
          !loggedIn ?
          <Route exact path="/" render={() => <Home {...this.props} /> } />
          : 'Hello'
        }
        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signinSuccess,
    signout
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
