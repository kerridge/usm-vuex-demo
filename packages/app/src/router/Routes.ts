import TodosView from "../components/Todos";
import CounterView from "../components/Counter";
import OrganizationView from "../main/organization/OrganizationView"

let routes: {} = {
    home: {
        screen: TodosView,
        path: "/",
        module: "todos"
    },
    counter: {
        screen: CounterView,
        path: "/counter",
        module: "counter"
    },
    organization: {
        screen: OrganizationView,
        path: "/organization",
        module: "organization"
    }
}

export { routes }