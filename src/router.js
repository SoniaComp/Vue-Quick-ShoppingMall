import Vue from 'vue';
import Router from 'vue-router';

import DefaultLayout from './layouts/Default.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'default', component: DefaultLayout }
  ]
});

export default router;