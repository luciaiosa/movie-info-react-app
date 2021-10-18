const path = require('path');
const { ESLINT_MODES }  = require('@craco/craco');

module.exports = {
    eslint: {
        mode: ESLINT_MODES.file
    },
    babel: {
        loaderOptions: {
            babelrc: true
        }
    },
    webpack: {
        alias: {
            '@containers': path.resolve(__dirname, 'src/containers/')
        }
    },
}