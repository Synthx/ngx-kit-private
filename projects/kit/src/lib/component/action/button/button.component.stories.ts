import { Meta, Story } from '@storybook/angular';
import { KtButtonComponent } from './button.component';
import { ktIcons } from '../../icon/icon.component';

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
            options: ['primary', 'secondary', 'ghost'],
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
        icon: {
            control: 'select',
            options: ktIcons,
            description: 'The icon to display.',
        },
    },
} as Meta<KtButtonComponent>;

const Template: Story<KtButtonComponent> = args => ({
    props: args,
    template: `<kt-button [disabled]='disabled' [loading]='loading' [icon]='icon' [shape]='shape' [type]='type' [variant]='variant' (onTap)='onTap($event)'>Click me</kt-button>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Shape = Template.bind({});
Shape.args = {
    ...Default.args,
    shape: 'circle',
};

export const Variant = Template.bind({});
Variant.args = {
    ...Default.args,
    variant: 'secondary',
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

export const Icon = Template.bind({});
Icon.args = {
    ...Default.args,
    icon: 'add',
};
