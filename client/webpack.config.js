const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const { InjectManifest } = require('workbox-webpack-plugin')

// TODO: Add and configure workbox plugins for a service worker and manifest file.

module.exports = () => {
	return {
		mode: 'development',
		entry: {
			main: './src/js/index.js',
			install: './src/js/install.js',
		},
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},
		plugins: [
			new HotModuleReplacementPlugin(),
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				title: 'JATE',
				favicon: './src/images/logo.png',
				template: './index.html',
			}),
			/*new CopyWebpackPlugin({
				patterns: [
					{
						from: path.resolve(__dirname, '../site.webmanifest'),
						to: path.resolve(__dirname, '../dist'),
					},
				],
			}), */
			new InjectManifest({
				swSrc: './src-sw.js',
			}),
			new WebpackPwaManifest({
				name: 'Just Another Text Editor',
				short_name: 'JATE',
				description:
					'A text editor that also uses a service worker to work on and offline',
				background_color: '#225ca3',
				theme_color: '#225ca3',
				icons: [
					{
						src: path.resolve('src/images/logo.png'),
						sizes: [96, 128, 256],
					},
				],
			}),
		],

		module: {
			rules: [
				{
					test: /\.(js)$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: 'file-loader',
						},
					],
				},
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader'],
				},
			],
		},
	}
}
