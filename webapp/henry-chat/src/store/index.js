import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    messages: [/* Message */]
  },
  actions: {
    FETCH_MESSAGE: ({})
  },
  mutations: {
    ADD_MESSAGE: (state, { sender, icon, message }) => {
      console.log("SETTING MESSAGES: " + sender)
      console.log("SETTING MESSAGES: " + icon)
      console.log("SETTING MESSAGES: " + message)
    }
  },
  getters: {
    // messages that should be currently displayed
    activeMessages (state) {
      return state.messages
    }
  }
})

export default store
