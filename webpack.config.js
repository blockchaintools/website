const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'assets/ts/index.ts'),
    output: {
        filename: 'tools.js',
        path: path.join(__dirname, 'assets/js/'),
    },
    watch: false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
                query: {
                    declaration: false,
                },
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
};