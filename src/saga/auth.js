import { call, fork, put, select, take, takeEvery } from 'redux-saga/effects'
import TYPES from '../actions/types'
import { authRef } from '../database/firebase'

function* signup (action) {
    try {
        const request = yield call(
            ({email, password}) => authRef.createUserWithEmailAndPassword(email, password), {
                email: action.userEmail,
                password: action.userPassword
        })
        yield put({
                ...action,
                type: TYPES.SIGNUP_SUCCESS,  
                request})
    } catch (error) {
        console.log(error);
    }
}

function* signin (action) {
    try {
        const request = yield call(
            ({email, password}) => authRef.signInWithEmailAndPassword(email, password), {
                email: action.userEmail,
                password: action.userPassword
        })
        console.log(request)
        yield put({
                ...action,
                type: TYPES.SIGNIN_SUCCESS,  
                ...request})
    } catch (error) {
        console.log(error);
    }
}

export default function* rootSaga() {
    yield [
      takeEvery(TYPES.SIGNUP, signup),
      takeEvery(TYPES.SIGNIN, signin)
    ];
  }