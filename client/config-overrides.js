const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        'path': require.resolve('path-browserify'),
        'crypto': require.resolve('crypto-browserify'),
        "stream": require.resolve("stream-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "vm": require.resolve("vm-browserify")
    }),
);
