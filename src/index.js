// const Vue = require('vue');
import Vue from 'vue';
import App from './App.vue';
import store from '../plugins/store';
import router from '../plugins/router';
import vuetify from '../plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import '../public/index.css';

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App)

}).$mount('#root');