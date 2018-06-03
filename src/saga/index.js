import invites from './invites'
import auth from './auth'

export default function* rootSaga() {
    yield [
        invites(),
        auth()
    ];
  }