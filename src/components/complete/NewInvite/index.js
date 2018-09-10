import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addInvite } from '../../../actions/invites';

class NewInvite extends Component {
	constructor(props) {
		super(props);

		this.state = {
			game: ''
		};
	}

	render() {
		const { invites, addInvite } = this.props;

		return (
			<div>
				<input type="text" value={this.state.game} onChange={e => this.setState({ game: e.target.value })} />
				<button onClick={() => addInvite(this.state.game)}>Submit</button>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {};
};
const mapDispatchToProps = {
	addInvite
};

export default connect(mapStateToProps, mapDispatchToProps)(NewInvite);
