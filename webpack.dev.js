const path = require('path');
// https://webpack.js.org/configuration/
module.exports = {
    mode: 'development',
    entry: './react/App.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // stage-2 to allow destructuring
                        presets: ['react', 'stage-2'],
                    },
                },
            },
        ],
    },
};
