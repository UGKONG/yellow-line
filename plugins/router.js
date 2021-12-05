import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../src/pages/Home')
  },
  {
    path: '/About',
    component: () => import('../src/pages/About')
  },
];

const router = new VueRouter({
//   mode: 'history',
  routes
});

export default router;
