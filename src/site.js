import Vue from "vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";

import Root from "./layout/root.vue";
import UnderConstruction from "./views/uc.vue";
import NotFound from "./views/404.vue";

import AboutMe from "./views/about.vue";

import {hash_upgrade} from "./util/routing.js";

//Use Vue plugins
Vue.use(VueRouter);
Vue.use(BootstrapVue);

let router = window.router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: UnderConstruction},
        {path: "/services", component: UnderConstruction},
        {path: "/projects", component: UnderConstruction},
        {path: "/blogs", component: UnderConstruction},
        {path: "/about", component: AboutMe},
        {path: "/*", component: NotFound}
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
