import { createRouter, createWebHashHistory } from "vue-router";
// github pages не позволяет настраивать сервер, поэтому там стоит использовать не createWebHistory, а createWebHashHistory
// если можно настраивать сервер, то можно и createWebHistory юзать
const routerHistory = createWebHashHistory();

import HomePage from "../src/pages/HomePage"
import AboutPage from "../src/pages/AboutPage"
import NotFound from "../src/pages/NotFound"

const routes = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/about",
            name: "about",
            component: AboutPage
        },
        {
            // path: '/:PathMatch(.*)*',
            path: '/:CatchAll(.*)',
            name: "404",
            component: NotFound
        }
    ]
})

export default routes;