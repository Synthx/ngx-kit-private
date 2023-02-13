import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
    theme: {
        ...themes.normal,
        base: 'light',
        // brand
        brandTitle: 'Kit',
        brandUrl: 'https://github.com/Synthx/ngx-kit',
        brandTarget: '_blank',
        // typography
        fontBase: '"Roboto", Arial, Helvetica, sans-serif',
        fontCode: 'monospace',
    },
});
