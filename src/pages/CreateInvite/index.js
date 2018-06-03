import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getInvites} from '../../actions/invitesActions'

import NewInvite from '../../components/complete/NewInvite'

class CreateInvite extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.getInvites()
    }

    render () {
        const {invites, addInvite} = this.props
        
        return (
            <div>
                <NewInvite/>
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
    getInvites
  };
  

export default  connect(mapStateToProps, mapDispatchToProps)(CreateInvite)