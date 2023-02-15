import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { KtDialogComponent } from './dialog.component';
import { KtButtonComponent } from '../../action';

export default {
    title: 'Components / Overlays / Dialog',
    component: KtDialogComponent,
    decorators: [
        moduleMetadata({
            imports: [KtButtonComponent],
        }),
    ],
} as Meta<KtDialogComponent>;

const Template: Story<KtDialogComponent> = args => ({
    props: args,
    template: `
        <kt-dialog (onClose)='onClose($event)'>
            <span kt-dialog-title>What is a dialog?</span>
            Nam maximus elementum felis at lobortis. Duis ac lacinia neque, non egestas sem. Donec scelerisque laoreet nunc, quis porttitor nibh. Cras viverra est sem, in fringilla odio dapibus et. Ut ornare mi posuere, sagittis dolor id, pretium tortor. Donec dui erat, faucibus dignissim tempus eu, ullamcorper vel ligula. Nam aliquet semper ullamcorper. In porttitor tellus cursus, pellentesque magna sollicitudin, egestas enim. Donec posuere sodales mauris eget laoreet. Phasellus a laoreet enim. Etiam dapibus rutrum risus id dapibus. Vestibulum sit amet fringilla leo.
            <kt-button kt-dialog-actions variant='ghost'>Cancel</kt-button>
            <kt-button kt-dialog-actions>Confirm</kt-button>
        </kt-dialog>
    `,
});

export const Default = Template.bind({});
Default.args = {};
