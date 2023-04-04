import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home/index.vue';
import aMap from '../view/amap/index.vue';
import marker from '../view/marker/index.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/amap',
        component: aMap
      },
      {
        path: '/marker/:id?',
        component: marker
      }
    ]
});

export default router;