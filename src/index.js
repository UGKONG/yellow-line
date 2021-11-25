import Vue from 'vue';
import App from './App';
import store from '../plugins/store';
import router from '../plugins/router';
import vuetify from '../plugins/vuetify';
import '../public/index.css';
import 'vuetify/dist/vuetify.min.css';

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#root');