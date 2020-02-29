require('dotenv').config()
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: [
  // '@babel/polyfill',
  path.resolve('resources/js/app.js')
  ],
  output: {
    publicPath: "/js/",
    path: path.resolve("public/js/"),
    filename: "app.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CompressionPlugin({
      test: /\.js$/,
      algorithm: 'gzip',
      deleteOriginalAssets: true,
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerPort: 7788
    // }),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'res': path.resolve(__dirname, 'resources')
    }
  }
}
