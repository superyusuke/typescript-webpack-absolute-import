const path = require("path");
const { NODE_ENV = "production" } = process.env;
const WebpackShellPlugin = require("webpack-shell-plugin");

module.exports = {
  watch: NODE_ENV === "development",
  entry: "./src/index.ts",
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      src: path.resolve(__dirname, "src"),
      others: path.resolve(__dirname, "..", "others")
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"]
      }
    ]
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ["yarn run:dev"]
    })
  ]
};
