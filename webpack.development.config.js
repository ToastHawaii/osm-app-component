const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./index.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    library: "osmAppComponent",
    libraryTarget: "umd",
    chunkFilename: pathData => {
      const parts = pathData.chunk.name.split("-");
      return `${parts[0]}/${parts[1]}.js`;
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  mode: "development",
  // Enable sourcemaps for debugging webpack's output.
  devtool: "inline-source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env", "@babel/typescript"],
              plugins: [
                ["@babel/transform-runtime"],
                "@babel/proposal-class-properties",
                "@babel/proposal-object-rest-spread"
              ]
            }
          }
        ]
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  }
};
