import { Meta, Story } from '@storybook/angular';
import { KtButtonComponent } from './button.component';

export default {
    title: 'Components / Actions / Button',
    component: KtButtonComponent,
    argTypes: {
        shape: {
            control: 'radio',
            options: ['rounded', 'circle', 'none'],
            description: 'The shape of the button.',
        },
        type: {
            control: 'radio',
            options: ['button', 'submit', 'reset'],
            description: 'The type of the button.',
        },
        variant: {
            control: 'radio',
            options: ['primary', 'outlined', 'plain'],
            description: 'The variant of the button.',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled or not.',
        },
        loading: {
            control: 'boolean',
            description: 'Whether the button is loading or not.',
        },
    },
} as Meta<KtButtonComponent>;

const Template: Story<KtButtonComponent> = args => ({
    props: args,
    template: `<kt-button [disabled]='disabled' [loading]='loading' [shape]='shape' [type]='type' [variant]='variant'>Click me</kt-button>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Shape = Template.bind({});
Shape.args = {
    ...Default.args,
    shape: 'circle',
};

export const Type = Template.bind({});
Type.args = {
    ...Default.args,
    type: 'submit',
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
    ...Default.args,
    loading: true,
};
