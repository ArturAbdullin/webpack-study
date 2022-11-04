const path = require("path");

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
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // resolve modules
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
};
