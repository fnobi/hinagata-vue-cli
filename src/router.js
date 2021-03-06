import Vue from "vue";
import Router from "vue-router";
import { BASE_PATH } from "@/constants.json";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

Vue.use(Router);

export default new Router({
    base: BASE_PATH,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 };
    }
});
