import Vue from 'vue';
import Vuex from 'vuex';
import FontAwesome from './icon';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    FontAwesome,
    number: 0
  },
  mutations: {
    setNumber: (state, payload) => state.number = payload,
  },
  actions: {
    setNumber: ({ commit }, payload) => commit('setNumber', payload),
  }
});

export default store;
