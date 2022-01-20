const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies: deps } = require('./package.json');
const { MFLiveReloadPlugin } = require('@module-federation/fmr');
module.exports = {
  entry: './src/index.tsx',
  output: { path: path.join(__dirname, 'build'), filename: 'index.bundle.js' },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: { port: 8080, historyApiFallback: true },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        Weatherapp: 'Weatherapp@http://localhost:8081/remoteEntry.js',
        Divesitesapp: 'Divesitesapp@http://localhost:8082/remoteEntry.js',
      },
      shared: [
        {
          ...deps,
          react: { requiredVersion: deps.react, singleton: true },
          'react-dom': {
            requiredVersion: deps['react-dom'],
            singleton: true,
          },
        },
      ],
    }),
    new MFLiveReloadPlugin({
      port: 8080, // the port your app runs on
      container: 'container', // the name of your app, must be unique
      standalone: true, // false uses chrome extention
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
};
