import * as React from "react";
import * as ReactDOM from "react-dom";

/**
 * @typedef {Function} RenderFunction
 * @description a function that renders data
 * @param {*} data
 */

/**
 * @typedef {Function} PairedRespond
 * @description a function that sends it's input to a paired PairedRequest function (see https://github.com/johnhenry/async-endpoint)
 * @param {*} response - response for request function
 */

/**
 * @function *
 * @description creates a render function that renders yeilded results from programs
 * to any number of target functions. If no targets are given, objects will be rendered
 * using "console.log"
 * Can be used as a "passthrough" (see "createQueue" example)
 * @param {*} [Interface] - request function for input
 * @param {*} [target] - dom element into which to render the
 * @param {PairedRespond} [respond] - optional respond function for input
 * @return {RenderFunction}
 * @example
 * import * as React from "react";
 * import CreateReactRenderer from "async-endpoint-react-renderer";
 * const renderer = CreateRenderer(({ data }) => <React.Fragment>{data}</React.Fragment>, document.getElementById("main"))
 * renderer({ data: "hello world" });
 * //writes "hello world" to dom
 */
export default (Interface, target, respond) => data => {
  ReactDOM.render(
    React.createElement(Interface, Object.assign({}, data, { respond })),
    target
  );
};
// export default (Interface, target, respond) => data =>
//   ReactDOM.render(
//     React.createElement(Interface, { ...data, respond }),
//     target
//   );

//# sourceMappingURL=index.js.map

//# sourceMappingURL=index.js.map
