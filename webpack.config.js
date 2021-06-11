module.exports = {
    mode: 'development',
    devServer: {
      host: '0.0.0.0',
      port: '8080',
      publicPath: '/',
      contentBase: './public/',
      watchContentBase: true,
      watchOptions: {
        ignored: /node_modules/,
      },
      // enable HMR
      hot: true,
      hotOnly: true,
    },
    plugins: [
      // Generates an `index.html` file with the <script> injected.
      new HtmlWebpackPlugin({
        inject: true,
        template: './public/index.html',
      }),
    ],
  }