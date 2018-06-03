import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SignUp from '../../components/complete/SignUp'
import SignIn from '../../components/complete/SignIn'

import { signup, signin } from '../../actions/auth'

class Home extends Component {

    render () {
        const {signup, signin} = this.props

        return (
            <div>
                <SignUp
                    onSubmit = {signup}/>
                <SignIn
                    onSubmit = {signin}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = {
    signup,
    signin
  };

export default connect(mapStateToProps, mapDispatchToProps)(Home)