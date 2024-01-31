import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import StartHerePage from './pages/StartHerePage.vue';
import CustomerPage from './pages/CustomerPage.vue';
import ErrorPage from './pages/ErrorPage.vue'
import YtVideoPage from './pages/YtVideoPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: HomePage
            },
        },
        {
            path: '/QuickStart',
            name: 'StartHerePage',
            components: {
                default: StartHerePage
            },
        },
        {
            path: '/Customer',
            name: 'CustomerPage',
            components: {
                default: CustomerPage
            }
        },
        {
            path: '/OffcanvaVid',
            name: 'YtVideo',
            components: {
                video: YtVideoPage
            },
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            components: {
                default: ErrorPage
            }
        }

    ]
});

export { router };