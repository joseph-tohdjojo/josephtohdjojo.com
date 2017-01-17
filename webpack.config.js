var path = require( 'path' );

module.exports = {
	entry: {
		joeportfolio: path.join( __dirname, 'src/app.js' )
	},
	output: {
		path: path.join( __dirname, '/public/bundle' ),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: /src/,
				loader: 'babel'
			},
			{
				test: /\.scss$/,
				include: /src/,
				loaders: [ 'style', 'css', 'autoprefixer', 'sass' ]
			},
			{
				test: /\.html$/,
				include: /src/,
				loader: 'html'
			},
			{
				// ASSETS
			  test: /\.(png|jpg|gif|svg)$/,
			  loader: 'file-loader?name=assets/[name].[ext]'
			}
		]
	}
};
