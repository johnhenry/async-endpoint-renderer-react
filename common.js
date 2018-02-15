'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (process.env.NODE_ENV !== 'production') {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (process.env.NODE_ENV === 'production') {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = require('./cjs/react-dom.production.min.js');
} else {
  module.exports = require('./cjs/react-dom.development.js');
}

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
var index = (function (Interface, target, respond) {
  return function (data) {
    undefined(undefined(Interface, Object.assign({}, data, { respond: respond })), target);
  };
});
// export default (Interface, target, respond) => data =>
//   ReactDOM.render(
//     React.createElement(Interface, { ...data, respond }),
//     target
//   );

module.exports = index;
