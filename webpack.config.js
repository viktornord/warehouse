'use strict';

const
    ENV = process.env.NODE_ENV,
    path = require('path'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackDevServer = require('webpack-dev-server');

const webpackConfig = {
    entry: [
        './src/boot.ts'
    ],
    resolve: {
        root: [
            __dirname
        ],
        extensions: ['', '.js', '.ts', '.scss', 'html', '.css']
    },
    watch: ENV === 'dev',
    devtool: ENV === 'dev' ? 'inline-module-source-map' : null,
    output: {
        path: path.join(__dirname, '/public/'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'babel?presets[]=es2015,presets[]=stage-0!ts', include: /src/},
            {test: /\.json$/, loader: 'json', include: /src/},
            {test: /\.jade$/, loader: 'jade-loader'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css!postcss')},
            {test: /\.scss$/, loader:  ExtractTextPlugin.extract('style', 'css!postcss!sass')},
            {test: /\.(png|jpg|svg|ttf|eot|woff||woff2)$/, loader:  'file?name=[path]'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ filename: 'index.html', template: path.resolve(__dirname, 'src', 'index.jade') }),
        new ExtractTextPlugin('styles.css', {allChunks: true}),
        new webpack.optimize.CommonsChunkPlugin({ name: 'common' }),
        new webpack.ProvidePlugin({
            _: 'lodash',
            'jQuery': 'jquery'
        })
    ],
    postcss: [
        autoprefixer()
    ]
};
if (ENV === 'dev') {
    webpackConfig.entry.unshift("webpack-dev-server/client?http://localhost:8080/");
    const compiler = webpack(webpackConfig);
    const server = new WebpackDevServer(compiler);
    server.listen(8080);
}

module.exports = webpackConfig;