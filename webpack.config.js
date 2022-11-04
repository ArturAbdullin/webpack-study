const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/index.ts",
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // find all files ending with .ts
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")], // where to find .ts files
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: [path.resolve(__dirname, "src/styles")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // resolve modules
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
    }),
  ],
};
