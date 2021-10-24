const path = require('path');
const { ESLINT_MODES } = require('@craco/craco');

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
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@config': path.resolve(__dirname, 'src', 'config'),
            '@containers': path.resolve(__dirname, 'src', 'containers/'),
            '@hooks': path.resolve(__dirname, 'src', 'hooks/'),
            '@services': path.resolve(__dirname, 'src', 'services/'),
            '@store': path.resolve(__dirname, 'src', 'store/'),
            '@translations': path.resolve(__dirname, 'src', 'translations/')
        }
    }
};
