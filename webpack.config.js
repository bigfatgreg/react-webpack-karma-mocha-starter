module.exports = {
  entry: ['./app/main.js'],
  output: {
    path: process.env.NODE_ENV === 'production' ? './dist' : './build',
    filename: 'main.js'
  },
	module: {
		loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
			}
		]
	}
};