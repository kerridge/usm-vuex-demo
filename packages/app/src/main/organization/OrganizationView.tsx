import { Component, Prop, Mixins } from "vue-property-decorator";
import { FoobarMixin, Value } from "../../lib/mixins";
// import "./style.scss";

type SetOrgName = (name: string) => void;

@Component
export default class OrganizationView extends Mixins<FoobarMixin>(FoobarMixin) {
  @Prop() orgName!: string;
  @Prop(Function) setName!: SetOrgName;

  created () {
    this.log({
      text: this.mixinValue
    });
  }

  log(value: Value) {
    console.log(value.text);
  }

  render() {
    return (
      <div class="body">
        <button onClick={() => this.setName("JIMS MOWING")}>JIMS MOWING</button>
        <span>{this.orgName}</span>
        <button onClick={() => this.setName("STEVES TRIMMING")}>STEVES TRIMMING</button>
      </div>
    );
  }
}
