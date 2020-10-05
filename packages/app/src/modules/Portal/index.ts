import { injectable, inject } from 'inversify';
import Module from "../../lib/baseModule";
import Counter from "../Counter";
import Todos from "../Todos";
import Organization from "../../main/organization/OrganizationViewModel"
import CustomRouter from "../../router/CustomRouter"
import moduleConnect from '../../lib/moduleConnect';

export interface AppOptions {
  main: any;
  routes: any;
}

interface PortalDependencies {
  // ViewModels
  counter: Counter;
  todos: Todos;
  organization: Organization

  // Vue specific modules
  router: CustomRouter;
  appOptions: AppOptions;
}

@injectable()
export default class Portal extends Module<PortalDependencies> {
  constructor(
    @inject("Counter") counter: Counter,
    @inject("Todos") todos: Todos,
    @inject("Organization") organization: Organization,
    @inject("CustomRouter") router: CustomRouter,
    @inject("AppOptions") appOptions: AppOptions,
  ) {
    const params = {
      modules: {
        counter,
        todos,
        organization,

        router,
        appOptions
      }
    };
    super(params);
    this.bootstrap();
  }

  get counter() {
    return this._modules.counter;
  }

  get todos() {
    return this._modules.todos;
  }

  get router() {
    return this._modules.router;
  }

  get organization() {
    return this._modules.organization;
  }

  get main() {
    return this._modules.appOptions.main;
  }

  get routes() {
    return Object.entries(this._modules.appOptions.routes)
      .map((item: any) => {
        const [name, {path, screen, module}] = item;
        const component = moduleConnect(screen, module);
        return {
          path,
          name,
          component
        }
      });
  }

  createApp() {
    const router = this.router.createRouter(this.routes);
    return {
      router,
      store: this.store,
      render: (h: any) => h(this.main)
    }
  }
}
