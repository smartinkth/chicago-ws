import { SET_MY_HAND, SET_MY_TURN, SET_MY_PLAYER } from './mutation_types'

const state = {
  isMyTurn: false,
  hand: [],
  id: '',
  name: '',
  score: 0,
  hasTakenChicago: false,
  winner: false
}

const mutations = {
  [SET_MY_HAND] (state, value) {
    state.hand = value
  },
  [SET_MY_TURN] (state, value) {
    state.isMyTurn = value
  },
  [SET_MY_PLAYER] (state, my) {
    state.id = my.id
    state.name = my.name
    state.score = my.score
    state.hasTakenChicago = my.hasTakenChicago
    state.winner = my.winner
  }
}

export default { state, mutations }
