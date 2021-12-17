import Vue from 'vue';
import Vuex from 'vuex';
import Icon from './Icon';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    Icon,
    number: 0
  },
  mutations: {
    setNumber: (state, payload) => state.number = payload,
  },
  actions: {
    setNumber: ({ commit }, payload) => commit('setNumber', payload),
  }
});

export const eventBus = new Vue({
  methods: {

  }
});

export default store;
