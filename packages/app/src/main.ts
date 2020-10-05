import "reflect-metadata";
import "./registerServiceWorker";
import Vue from "vue";
import { load } from "./lib/loader";
import { routes } from "./router/Routes"
import CustomRouter from "./router/CustomRouter"
import Portal from "./modules/Portal";

import Counter from "./modules/Counter";
import Todos from "./modules/Todos";
import Organization from "./main/organization/OrganizationViewModel"

import App from "./App.vue";

Vue.config.productionTip = false;

const { portal, app } = load({
  bootstrap: "Portal",
  modules: {
    // Custom modules
    Counter,
    Todos,
    Organization,
    
    // Vue specific modules
    Portal,
    CustomRouter
  },
  main: App,
  routes: routes
});

Vue.prototype.portal = portal;
(window as any).portal = portal;

new Vue(app).$mount("#app");
