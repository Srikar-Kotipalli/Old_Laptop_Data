const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	mode: process.env.REACT_APP_WEBPACK_MODE,
	performance: {
		hints: false
	},
	entry: {
		Bundle: path.resolve(__dirname, '..', './src/index.js')
	},
	output: {
		path: path.resolve(__dirname, '..', 'build'),
		filename: '[name].[chunkhash].js'
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		},
		minimize: true,
		minimizer: [
			new TerserPlugin(),
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
							plugins: ['@babel/plugin-proposal-class-properties']
						}
					}
				]
			},
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							sourceMap: false,
							modules: false
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif|ico)$/,
				use: [
					{
						loader: 'url-loader',
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
				test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/fonts/'
						}
					}
				]
			},
			{
				test: /\.config$/,
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
		new CompressionPlugin({
			filename: '[path][base].gz',
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '..', 'public/index.html'),
			favicon: path.resolve(__dirname, '..', 'public/favicon.ico')
		}),
		new MiniCssExtractPlugin({
			filename: 'styles.[contenthash].css',
			chunkFilename: '[id].css'
		}),
		new Dotenv({
			path: path.resolve(__dirname, '..', '.env.deployment')
		})
	]
};
