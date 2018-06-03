import TYPES from './types'

export const addInvite = game => ({
    type: TYPES.ADD_INVITE,
    game
})

export const getInvites = () => ({
    type: TYPES.GET_INVITES
})