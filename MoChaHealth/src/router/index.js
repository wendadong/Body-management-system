import Vue from "vue";
import VueRouter from "vue-router";
import Cal from "@/views/cal";
import Food from "@/views/food";
import Article from "@/views/article";
import Login from "@/views/login";
import Record from "@/views/record";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/search" },
  {
    path: "/search",
    name: "cal-search",
    component: Cal
  },
  {
    path: "/food",
    name: "food",
    component: Food
  },
  {
    path: "/article",
    name: "article",
    component: Article
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/record",
    name: "record",
    component: Record
  }
];

const router = new VueRouter({
  routes
});

export default router;
