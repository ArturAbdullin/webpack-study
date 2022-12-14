const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const OUTPUT_FOLDER = "public";
const ASSETS_FOLDER = "assets/";
const JS_FOLDER = "js/";
const CSS_FOLDER = "css/";

module.exports = {
  mode: "development",
  devtool: "source-map",
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
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        include: [path.resolve(__dirname, "src/styles")],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // resolve modules
  },
  output: {
    path: path.resolve(__dirname, OUTPUT_FOLDER),
    filename: `${JS_FOLDER || ""}[name][contenthash].js`, // contenthash is for caching https://webpack.js.org/guides/caching/
    clean: true,
    assetModuleFilename: `${ASSETS_FOLDER || ""}[name][ext]`,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, OUTPUT_FOLDER),
    },
    port: 3000, // add a port to serve
    open: true, // open browser upon serve
    hot: true, // add HMR (hot module replacement)
    compress: true, // enable gzip compression
    historyApiFallback: true, // is related to 404 pages https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html",
    }),
    new FaviconsWebpackPlugin("src/assets/favicon-32x32.png"),
    new MiniCssExtractPlugin({
      filename: `${CSS_FOLDER || ""}[name].css`,
    }),
  ],
};
