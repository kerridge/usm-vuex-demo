import Vue from "vue";
import Router from "vue-router";
import { injectable } from "inversify";
import Module from "../lib/baseModule";

@injectable()
export default class CustomRouter extends Module {
  public router?: Router;

  constructor(...args: []) {
    super(...args);
    Vue.use(Router);
  }

  createRouter(routes: any) {
    this.router = new Router({
      mode: "history",
      base: process.env.BASE_URL,
      routes
    });
    return this.router;
  }
}
