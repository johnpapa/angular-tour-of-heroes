module.exports = {
  entry: "./src/app/bootstrap",
  output: {path: __dirname + "/dist", filename: "bundle.js"},
  resolve: {extensions: ['', '.js', '.ts']},
  module: {loaders: [{test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/}]},
  devServer: {historyApiFallback: {index: 'src/index.html'}},
  devtool: ['eval', 'source-map']
};
