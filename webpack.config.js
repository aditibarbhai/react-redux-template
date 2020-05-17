const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack');

module.exports = env => {
  return {
    mode: env && env.prod ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      contentBase: './dist',
      port: 3000
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      }),
      new DotEnv({
        path: path.resolve(__dirname, 'config', (
          env && env.prod ? 'production.env' : '.env'
        ))
      })
    ],
    module: {
      rules: [
        {
          // for any file with a suffix of js or jsx
          test: /\.jsx?$/,
          // ignore transpiling JavaScript from node_modules as it should be that state
          exclude: /node_modules/,
          // use the babel-loader for transpiling JavaScript to a suitable format
          loader: 'babel-loader',
          options: {
            // attach the presets to the loader (most projects use .babelrc file instead)
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      ]
    }
  };
};
