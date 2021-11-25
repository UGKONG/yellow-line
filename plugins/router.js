import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../src/pages/Home';
import About from '../src/pages/About';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/About',
    component: About
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;