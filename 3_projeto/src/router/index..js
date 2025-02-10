import MyHome from "@/views/MyHome.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [{
    path: "/",
    name: 'myhome',
    component: MyHome
 },
{
    path: "/myorder",
    name: "myorder",
    component: () => import(/* webpackChunkName: "myorder" */ '../views/MyOrder.vue'),
 },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router