import Vue from "vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";

import Root from "./layout/root.vue";

import {hash_upgrade} from "./util/routing.js";

//Use Vue plugins
Vue.use(VueRouter);
Vue.use(BootstrapVue);

let router = window.router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: () => import("./views/uc.vue")},
        {path: "/services", component: () => import("./views/uc.vue")},
        {path: "/projects", component: () => import("./views/uc.vue")},
        {path: "/blogs", component: () => import("./views/uc.vue")},
        {path: "/about", component: () => import("./views/about.vue")},
        {path: "/*", component: () => import("./views/404.vue")}
    ]
});

new Vue({
    el: "#root",
    render: (h) => h(Root),
    router
});

let hu = hash_upgrade(router);
window.addEventListener("hashchange", hu);
hu();
