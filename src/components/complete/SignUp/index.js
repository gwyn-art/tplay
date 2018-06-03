import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

//validations 
import {checkEmail, checkPassword, checkUsername} from '../../../helpers/authValidations'

// dumbs
import DataField from '../../elementary/DataField'

class Signup extends Component {

    render () {
        const {handleSubmit} = this.props
        
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

export default Signup