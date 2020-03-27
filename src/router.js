import Vue from "vue";
import Router from "vue-router";
import AppHome from "@/components/AppHome";

const AppCamera = resolve => {
  require.ensure(["@/components/AppCamera"], () => {
    resolve(require("@/components/AppCamera"));
  });
};
const AppIdentity = resolve => {
  require.ensure(["@/components/AppIdentity"], () => {
    resolve(require("@/components/AppIdentity"));
  });
};

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: "/",
      name: "AppHome",
      default: false,
      component: AppHome
    },
    {
      path: "/scan",
      name: "AppCamera",
      component: AppCamera
    },
    {
      path: "/identity",
      name: "AppIdentity",
      default: true,
      component: AppIdentity
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
