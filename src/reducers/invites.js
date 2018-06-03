import TYPES from "../actions/types";

export default (state = {}, action) => {

  switch (action.type) {
    case TYPES.ADD_INVITE_SUCCESS:
        return [...state, {
            game: action.game,
            id: action.id
        }]
    case TYPES.GET_INVITES_SUCCESS:
        return [...state, ...action.invites]
    default:
      return state;
  }
}