import React from "react";
import ReactDOM from "react-dom";
export default (Interface, element, respond) => data => {
  ReactDOM.render(
    React.createElement(Interface, Object.assign({}, data, { respond })),
    element
  );
};

// export default (Interface, element, respond) => data =>
//   ReactDOM.render(
//     React.createElement(Interface, { ...data, respond }),
//     element
//   );
