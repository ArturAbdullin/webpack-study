const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const OUTPUT_FOLDER = "public";

module.exports = {
  mode: "development",
  devtool: 'source-map',
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
    path: path.resolve(__dirname, OUTPUT_FOLDER),
    filename: "[name][contenthash].js", // contenthash is for caching https://webpack.js.org/guides/caching/
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, OUTPUT_FOLDER)
    },
    port: 3000, // add a port to serve
    open: true, // open browser upon serve
    hot: true, // add HMR (hot module replacement)
    compress: true, // enable gzip compression
    historyApiFallback: true // is related to 404 pages https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
