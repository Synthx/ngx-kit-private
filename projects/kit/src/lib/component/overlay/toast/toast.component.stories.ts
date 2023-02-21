import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { KtToastComponent } from './toast.component';
import { KtIconComponent } from '../../icon/icon.component';

export default {
    title: 'Components / Overlays / Toast',
    component: KtToastComponent,
    decorators: [
        moduleMetadata({
            imports: [KtIconComponent],
        }),
    ],
    argTypes: {
        type: {
            control: 'radio',
            options: ['success', 'error'],
            description: 'The type of the toast.',
        },
    },
} as Meta<KtToastComponent>;

const Template: Story<KtToastComponent> = args => ({
    props: args,
    template: `
        <kt-toast [type]='type'>
            Nam maximus elementum felis at lobortis. Duis ac lacinia neque
        </kt-toast>
    `,
});

export const Default = Template.bind({});
Default.args = {};

export const Type = Template.bind({});
Type.args = {
    ...Default.args,
    type: 'error',
};

const TitleTemplate: Story<KtToastComponent> = args => ({
    props: args,
    template: `
        <kt-toast [type]='type'>
            <span kt-toast-title>What is a toast?</span>
            Nam maximus elementum felis at lobortis. Duis ac lacinia neque
        </kt-toast>
    `,
});

export const Title = TitleTemplate.bind({});
Title.args = {
    ...Default.args,
};
