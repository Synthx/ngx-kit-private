import { Meta, Story } from '@storybook/angular';
import { KtIconButtonComponent } from './icon-button.component';

export default {
    title: 'Components / Actions / IconButton',
    component: KtIconButtonComponent,
    argTypes: {
        shape: {
            control: 'radio',
            options: ['rounded', 'circle', 'none'],
            description: 'The shape of the button.',
        },
        variant: {
            control: 'radio',
            options: ['primary', 'secondary', 'ghost'],
            description: 'The variant of the button.',
        },
    },
} as Meta<KtIconButtonComponent>;

const Template: Story<KtIconButtonComponent> = args => ({
    props: args,
    template: `<kt-icon-button icon='add' [shape]='shape' [variant]='variant' (onTap)='onTap($event)'></kt-icon-button>`,
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
    variant: 'ghost',
};
