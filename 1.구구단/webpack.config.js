const path = require("path");
const webpack = require("webpack");

module.exports = {
  name: "gugudan-setting",
  mode: "development",
  devtool: "eval", // production일때는 hidden-source-map 사용
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
  },
  // 공식문서에서 Loaders가 module
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {},
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
