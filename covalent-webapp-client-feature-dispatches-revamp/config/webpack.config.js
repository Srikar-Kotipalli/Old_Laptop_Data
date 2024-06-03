const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
	mode: 'development',
	performance: {
		hints: false
	},
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		compress: true
	},
	entry: {
		Bundle: path.resolve(__dirname, '..', './src/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[chunkhash].js'
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		},
		minimizer: [
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						// Lossless optimization with custom option
						// Feel free to experiment with options for better result for you
						plugins: [
							['optipng', { optimizationLevel: 5 }],
							// Svgo configuration here https://github.com/svg/svgo#configuration
							[
								'svgo',
								{
									plugins: [
										{
											name: 'preset-default',
											params: {
												overrides: {
													removeViewBox: false,
													addAttributesToSVGElement: {
														params: {
															attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }]
														}
													}
												}
											}
										}
									]
								}
							]
						]
					}
				}
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.(jpe?go|pngo|gifo|svgo)$/i,
				type: 'asset'
			},
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, '..', 'node_modules'),
				use: [
					{
						loader: 'babel-loader',
						options: {
							compact: false,
							presets: ['@babel/preset-env', '@babel/preset-react'],
							sourceType: 'unambiguous',
							plugins: [
								[
									'@babel/plugin-transform-runtime',
									{
										regenerator: true
									}
								],
								'@babel/plugin-proposal-class-properties'
							]
						}
					}
				]
			},
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/,
				exclude: path.resolve(__dirname, 'node_modules')
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: { name: '[name].[ext]' }
					}
				]
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							limit: 10000
						}
					}
				]
			},
			{
				test: /\.(config|ttf)$/,
				use: [
					{
						loader: 'file-loader',
						options: { name: '[name].[ext]' }
					}
				]
			},
			{
				type: 'javascript/auto',
				test: /\.json$/,
				use: [
					{
						loader: 'json-loader',
						options: { name: '[name].[ext]' }
					}
				]
			},
			{
				test: /\.ya?ml$/,
				use: 'yaml-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '..', 'public/index.html'),
			favicon: path.resolve(__dirname, '..', 'public/favicon.ico')
		}),
		new Dotenv({
			path: path.resolve(__dirname, '..', '.env.int')
		})
	]
};
