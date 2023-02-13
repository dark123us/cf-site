const CracoAlias = require("craco-alias");

module.exports = {
    devServer: {
        port: 13000,
        historyApiFallback: false,
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                baseUrl: ".",
                tsConfigPath: "./tsconfig.paths.json"
            }
        }
    ],
    addons: [{
        name: "storybook-preset-craco",
        options: {
            cracoConfigFile: "../craco.config.js",
        },
    }],
};
