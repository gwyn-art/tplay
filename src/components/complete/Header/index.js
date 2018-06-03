import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signout } from '../../../actions/auth'

const Header = (props) => {
    const {signout} = props

    return (
        <div>
            
            <button
                onClick = {() => signout()}>
                Sign Out
            </button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        userData: state.auth.userData
    }
}

const mapDispatchToProps = { 
    signout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
