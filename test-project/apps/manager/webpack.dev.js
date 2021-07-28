const path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/index.js')
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src')
        }
    }
};
