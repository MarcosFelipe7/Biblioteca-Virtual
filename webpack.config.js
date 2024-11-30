const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  
  output: {
    path: path.resolve(__dirname, 'dist'),  
    filename: 'bundle.js', 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  
        exclude: /node_modules/,  
        use: 'babel-loader',  
      },
      {
        test: /\.css$/,  
        use: ['style-loader', 'css-loader'],  
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),  
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),  
    },
    port: 3000,  
    open: true,  
    hot: true,  
    compress: true,  
    headers: {
      'Access-Control-Allow-Origin': '*',  
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',  
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',  
    },
    proxy: [
      {
        context: ['/api'],  
        target: 'http://localhost:5000',  
        secure: false,  
      },
    ],
  },
};
