const path = require("path");

module.exports = {
  mode: "development",
  output: {
    filename: "main.bundle.js",
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "./loaders/build/apollo-hooks-loader.js"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
