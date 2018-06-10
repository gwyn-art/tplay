import { call, fork, put, select, take, takeEvery } from 'redux-saga/effects'
import TYPES from '../actions/types'
import { authRef } from '../database/firebase'

function* signup (action) {
    try {
        const newUser = yield call(
            ({email, password}) => authRef.createUserWithEmailAndPassword(email, password), {
                email: action.userEmail,
                password: action.userPassword
        })
        
        yield call(() => newUser.user.sendEmailVerification())
        
        yield call(() => newUser.user.updateProfile({
            displayName: action.username
        }))

        yield put({
                type: TYPES.SIGNUP_SUCCESS,  
        })
    } catch (error) {
       yield put({
           type: TYPES.SIGNUP_ERROR,
           message: error.message
       })
    }
}

function* signin (action) {
    try {
        const request = yield call(
            ({email, password}) => authRef.signInWithEmailAndPassword(email, password), {
                email: action.userEmail,
                password: action.userPassword
        })

        if(!request.user.emailVerified) {
            yield put ({
                type: TYPES.SIGNIN_ERROR,
                message: 'Email not verifired.'
            })
        }
        else {
            yield put({
                type: TYPES.SIGNIN_SUCCESS,  
                ...request.user})
        }
    } catch (error) {
        yield put({
            type: TYPES.SIGNIN_ERROR,
            message: error.message
        })
    }
}

export default function* rootSaga() {
    yield [
      takeEvery(TYPES.SIGNUP, signup),
      takeEvery(TYPES.SIGNIN, signin)
    ];
  }