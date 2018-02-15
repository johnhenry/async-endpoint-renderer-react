import resolve from "rollup-plugin-node-resolve";
import builtins from "rollup-plugin-node-builtins";
import babel from "rollup-plugin-babel";
import regenerator from "rollup-plugin-regenerator";

export default {
  input: "js/index.js",
  output: [
    {
      file: "browser.js",
      format: "iife",
      name: "AsyncEndpointReactRenderer"
    }
  ],
  plugins: [
    builtins(),
    resolve(),
    babel({
      exclude: "node_modules/**", // only transpile our source code
      plugins: ["external-helpers"]
    }),
    regenerator()
  ]
};
