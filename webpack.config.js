// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

const isProduction = process.env.NODE_ENV == "production"

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : "style-loader"
const URL = isProduction ? 'https://raw.githubusercontent.com/eltosilva/portifolio/master/src/data/profile.json' : 'profile'

const templateContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>var _ENV = { url: '${URL}'}</script>
    <title>Portfólio - Elto O. Silva</title>
</head>
<body>
    <div id="app" class="container"></div>
</body>
</html>`

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  devServer: {
    open: true,
    host: "localhost",
    proxy: {
      '/profile': 'http://localhost:3000'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({templateContent}),
    new webpack.SourceMapDevToolPlugin({filename: '[file].map[query]'})
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]'
        }
      }
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
}

module.exports = () => {
  if (isProduction) {
    config.mode = "production"
    
    config.plugins.push(new MiniCssExtractPlugin())
    config.optimization = {
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin({extractComments: 'all'})],
      minimize: true
    }
  } else {
    config.mode = "development"
  }

  console.log('\n')
  console.log(config)
  console.log('\n')
  
  return config
};
