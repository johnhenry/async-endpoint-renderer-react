import { render } from "lit-html";
export default (target, component, input) => state =>
  render(component(state, input), target);
