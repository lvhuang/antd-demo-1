import VueRouter from 'vue-router';

import PageA from '../page/pageA.vue';
import PageB from '../page/pageB.vue';
import PageC from '../page/pageC.vue'

const routes = [
    { path: '/', redirect: '/A' },
    { path: '/A', component: PageA },
    { path: '/B', component: PageB },
    { path: '/C', component: PageC },
    { path: '*', redirect: '/A' }
]

export  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})