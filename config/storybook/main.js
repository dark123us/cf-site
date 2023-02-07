const path = require('path');

module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        "storybook-preset-craco",
        '@storybook/preset-create-react-app',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-viewport/register',
        '@storybook/addon-knobs/register',
    ],
     webpackFinal(config, { configType }) {
         return {
             ...config,
             resolve: {
                 alias: {
                     ...config.resolve.alias,
                     '@': path.resolve(__dirname, '../../src/'),
                 },
             },
         };
     },
};
