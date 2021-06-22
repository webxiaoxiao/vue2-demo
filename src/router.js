import Vue from 'vue';
import Router from 'vue-router';
import Layout from './view/layout/layout';

Vue.use(Router);
const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('./view/home/index')
                },
                {
                    path: 'role',
                    name: 'role',
                    component: () => import('./view/home/index')
                },
                {
                    path: 'user',
                    name: 'user',
                    component: () => import('./view/user/index')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./view/login/index')
        }
    ]
});
export default router;
