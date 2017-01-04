import Vue from 'vue'
import Vuex from 'vuex'
import { fetchResponse } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    messages: [{
      icon: 'https://i.ytimg.com/vi/zJqLH8EA2rM/hqdefault.jpg',
      name: 'Henry',
      message: 'What\'s up world! It\'s henry! Let me help you with all your car troubles. I am excellent at finding awesome cars for people!!'
    }, {
      icon: 'https://i.ytimg.com/vi/ulysL4hs6_I/hqdefault.jpg',
      name: 'Jenny',
      message: 'Hey, can I has a car please boss?'
    }, {
      icon: 'http://www.w3schools.com/images/colorpicker.gif',
      name: 'Ben',
      message: 'Hey everyone, i\'m Ben'
    }, {
      icon: 'https://i.ytimg.com/vi/zJqLH8EA2rM/hqdefault.jpg',
      name: 'Henry',
      message: 'What\'s up world! It\'s henry! Let me help you with all your car troubles. I am excellent at finding awesome cars for people!!'
    }, {
      icon: 'https://i.ytimg.com/vi/ulysL4hs6_I/hqdefault.jpg',
      name: 'Jenny',
      message: 'Hey, can I has a car please boss?'
    }, {
      icon: 'http://www.w3schools.com/images/colorpicker.gif',
      name: 'Ben',
      message: 'Hey everyone, i\'m Ben'
    }, {
      icon: 'https://i.ytimg.com/vi/zJqLH8EA2rM/hqdefault.jpg',
      name: 'Henry',
      message: 'What\'s up world! It\'s henry! Let me help you with all your car troubles. I am excellent at finding awesome cars for people!!'
    }, {
      icon: 'https://i.ytimg.com/vi/ulysL4hs6_I/hqdefault.jpg',
      name: 'Jenny',
      message: 'Hey, can I has a car please boss?'
    }, {
      icon: 'http://www.w3schools.com/images/colorpicker.gif',
      name: 'Ben',
      message: 'Hey everyone, i\'m Ben'
    }]
  },
  actions: {
    FETCH_RESPONSE: ({ commit, dispatch, state }, { message }) => {
      return fetchResponse(message)
        .then(response => commit('ADD_MESSAGE', {
          sender: 'Henry',
          icon: 'https://github.com/PiusNyakoojo/henry/blob/master/webapp/henry-chat/public/logo.png',
          message: response
        }))
    }
  },
  mutations: {
    ADD_MESSAGE: (state, { sender, icon, message }) => {
      console.log('SETTING SENDER: ' + sender)
      console.log('SETTING ICON: ' + icon)
      console.log('SETTING MESSAGE: ' + message)
      state.messages.push({
        icon: icon,
        name: sender,
        message: message
      })
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
