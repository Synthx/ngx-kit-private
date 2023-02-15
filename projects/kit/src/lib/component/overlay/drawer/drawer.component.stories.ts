import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { KtDrawerComponent } from './drawer.component';
import { KtButtonComponent } from '../../action';

export default {
    title: 'Components / Overlays / Drawer',
    component: KtDrawerComponent,
    decorators: [
        moduleMetadata({
            imports: [KtButtonComponent],
        }),
    ],
} as Meta<KtDrawerComponent>;

const Template: Story<KtDrawerComponent> = args => ({
    props: args,
    template: `
        <kt-drawer (onClose)='onClose($event)'>
            <span kt-drawer-title>What is a drawer?</span>
            Nam maximus elementum felis at lobortis. Duis ac lacinia neque, non egestas sem. Donec scelerisque laoreet nunc, quis porttitor nibh. Cras viverra est sem, in fringilla odio dapibus et. Ut ornare mi posuere, sagittis dolor id, pretium tortor. Donec dui erat, faucibus dignissim tempus eu, ullamcorper vel ligula. Nam aliquet semper ullamcorper. In porttitor tellus cursus, pellentesque magna sollicitudin, egestas enim. Donec posuere sodales mauris eget laoreet. Phasellus a laoreet enim. Etiam dapibus rutrum risus id dapibus. Vestibulum sit amet fringilla leo.
            <kt-button kt-drawer-actions variant='secondary'>Cancel</kt-button>
            <kt-button kt-drawer-actions>Confirm</kt-button>
        </kt-drawer>
    `,
});

export const Default = Template.bind({});
Default.args = {};
