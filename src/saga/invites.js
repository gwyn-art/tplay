import { call, fork, put, select, take, takeEvery } from 'redux-saga/effects';
import TYPES from '../actions/types';
import { invitesRef } from '../database/firebase';

function* addInvite(action) {
	try {
		const request = yield call(game => invitesRef.add(game), {
			game: action.game
		});
		yield put({
			...action,
			type: TYPES.ADD_INVITE_SUCCESS,
			id: request.id
		});
	} catch (error) {
		console.log(error);
	}
}

function* getInvites() {
	try {
		const request = yield call(() => invitesRef.get());
		let invites = [];
		request.docs.forEach(doc => invites.push({ id: doc.id, ...doc.data() }));

		yield put({
			type: TYPES.GET_INVITES_SUCCESS,
			invites
		});
	} catch (error) {
		console.log(error);
	}
}

export default function* rootSaga() {
	yield [takeEvery(TYPES.ADD_INVITE, addInvite), takeEvery(TYPES.GET_INVITES, getInvites)];
}
