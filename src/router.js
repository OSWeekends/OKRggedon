import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Quarter from '@/views/Quarter.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true,
    },
    {
      path: '/quarter/:period',
      name: 'quarter',
      component: Quarter,
      props: true,
    },
  ],
});
