import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
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