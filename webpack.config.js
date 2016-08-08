module.exports = {
  entry: "./src/components/formPractice.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react", "stage-0"]
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".coffee", ".js"]
  }
}
