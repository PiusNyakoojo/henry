import Vue from 'vue'
import Vuex from 'vuex'
import { fetchResponse } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    messages: [],
    henryIsTyping: false
  },
  actions: {
    FETCH_RESPONSE: ({ commit, dispatch, state }, { message }) => {
      return fetchResponse(message)
        .then(response => commit('ADD_MESSAGE', {
          sender: 'Henry',
          icon: 'https://raw.githubusercontent.com/PiusNyakoojo/henry/master/webapp/henry-chat/public/logo.png',
          message: response.data.result.speech
        }))
    },

    SEND_MESSAGE: ({ commit, dispatch, state }, { message }) => {
      commit('ADD_MESSAGE', {
        sender: 'You',
        icon: 'https://deborahking.com/old1/www.deborahkingcenter.com/s/lWlvaXycb0OmyqJiANLBdg/HappyPerson.jpg',
        message: message
      })
      dispatch('FETCH_RESPONSE', { message })
    }
  },
  mutations: {
    ADD_MESSAGE: (state, { sender, icon, message }) => {
      const messageItem = {
        icon: icon,
        name: sender,
        message: message
      }
      if (sender !== 'Henry') {
        state.messages.push(messageItem)
        return
      }

      state.henryIsTyping = true
      // simulate Henry typing
      setTimeout(() => {
        state.henryIsTyping = false
        state.messages.push(messageItem)
      }, 2000)
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
