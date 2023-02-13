module.exports = {
    stories: ['../projects/**/*.stories.ts'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    core: {
        builder: '@storybook/builder-webpack5',
    },
    framework: '@storybook/angular',
    features: {
        postcss: true,
        storyStoreV7: true,
    },
};
