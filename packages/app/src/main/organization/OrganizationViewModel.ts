import { injectable } from "inversify";
import Module, { state, action, computed } from "../../lib/baseModule";

@injectable()
export default class Organization extends Module {
    @state orgName: string = "KFC"

    @action
    setName(name: string, state?: any) {
        state.orgName = name
    }

    getViewProps() {
        return {
            orgName: this.orgName,
            setName: (name: string) => this.setName(name)
        }
    }
} 