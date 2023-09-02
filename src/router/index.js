import { createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
// import About from '../views/About.vue';
// import Brazil from '../views/Brazil.vue';
// import Hawaii from '../views/Hawaii.vue';
// import Jamaica from '../views/Jamaica.vue';
// import Panama from '../views/Panama.vue';


const routes =  [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: About
    // }, 

    {
        path: '/brazil',
        name: 'brazil',
        component: () => import(/* webpackChunkName: Braziil */'../views/Brazil.vue')
    },
    {
        path: '/hawaii',
        name: 'hawaii',
        component: () => import(/* webpackChunkName: Hawaii */'../views/Hawaii.vue')
    },
    {
        path: '/jamaica',
        name: 'jamaica',
        component: () => import(/* webpackChunkName: Jamaica */'../views/Jamaica.vue')
    },
    {
        path: '/panama',
        name: 'panama',
        component: () => import(/* webpackChunkName: Panama */'../views/Panama.vue')
    },
    {
        path: '/destination/:id',
        name: 'destination.show',
        component: () => import ('../views/DestinationShow.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;