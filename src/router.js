import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import StartHerePage from './pages/StartHerePage.vue';
import CustomerPage from './pages/CustomerPage.vue';
import ErrorPage from './pages/ErrorPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/QuickStart',
            name: 'StartHerePage',
            component: StartHerePage,
        },
        {
            path: '/Customer',
            name: 'CustomerPage',
            component: CustomerPage,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: ErrorPage,
        }

    ]
});

export { router };