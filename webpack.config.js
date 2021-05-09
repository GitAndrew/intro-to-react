const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //Define the start of the application
  entry: "./src/index.js",
  //Define the path and file name of the bundle
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV || "development",
  // Allows import using paths relative to src
  resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
  //Setup dev server
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Which files should be served
    compress: true,
    port: 9000, // Default port is 8080
  },
  //Setup loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // Setup plugins
  // HtmlWebpackPlugin generates a new HTML file that automatically adds the bundle, to be served
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
