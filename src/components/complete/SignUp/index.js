import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

//validations 
import {checkEmail, checkPassword, checkUsername} from '../../../helpers/authValidations'

// dumbs
import DataField from '../../elementary/DataField'

class Signup extends Component {

    render () {
        const {
            handleSubmit, 
            emailSend,
            signupError } = this.props
        
        return (
            <form
                onSubmit = {handleSubmit}>
                <div>
                    <label 
                        htmlFor = 'username'>
                        Username
                    </label>
                    <Field
                        onChange = {e => this.setState({username: e.target.value})}
                        name = 'username'
                        component = {DataField} 
                        type = 'text' />
                </div>
                <div>
                    <label 
                        htmlFor = 'userEmail'>
                        Email
                    </label>
                    <Field
                        onChange = {e => this.setState({email: e.target.value})}
                        name = 'userEmail'
                        component = {DataField} 
                        type = 'email' />
                </div>
                <div>
                    <label 
                        htmlFor = 'userPassword'>
                        Password
                    </label>
                    <Field
                        onChange = {e => this.setState({password: e.target.value})} 
                        name = 'userPassword'
                        component = {DataField} 
                        type = 'password' />
                </div>
                {
                    emailSend ? <p> Email send. Confirm to go next </p> : null 
                }
                <p>
                    {signupError}
                </p>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

Signup = reduxForm({
    form: 'singup',
    validate: (data) => {
        let 
            errors = {},
            {username, userEmail, userPassword} = data

        errors = checkUsername(username, errors)
        errors = checkEmail(userEmail, errors)
        errors = checkPassword(userPassword, errors)
         

        return errors
    }})(Signup)

const mapStateToProps = (state, ownProps) => {
    return {
        emailSend: state.auth.emailSend,
        signupError: state.auth.errors.signup
    }
}

export default connect(mapStateToProps)(Signup)