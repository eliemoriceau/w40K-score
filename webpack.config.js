const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  resolve: {
    fallback: {
      dns: require.resolve("dns"),
    },
  },
  plugins: [new NodePolyfillPlugin()],
};
