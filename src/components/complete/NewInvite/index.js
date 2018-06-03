import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addInvite, getInvites} from '../../../actions/invitesActions'

class NewInvite extends Component {
    constructor (props) {
        super(props);

        this.state = {
            game: ''
        }
    }

    componentDidMount () {
        this.props.getInvites()
    }

    render () {
        const {invites, addInvite} = this.props
        
        return (
            <div>
                <input 
                    type = 'text'
                    value = {this.state.game}
                    onChange = {e => this.setState({game: e.target.value})}/>
                <button
                    onClick = {() => addInvite(this.state.game)}> 
                    Submit 
                </button>
                <div>
                    {invites.map(i => (<p>{i.game}</p>))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        invites: state.invites
    }
}
const mapDispatchToProps = {
    addInvite,
    getInvites
  };
  

export default  connect(mapStateToProps, mapDispatchToProps)(NewInvite)