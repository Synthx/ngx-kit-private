import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { KtLinkComponent } from './link.component';
import { RouterTestingModule } from '@angular/router/testing';

export default {
    title: 'Components / Actions / Link',
    component: KtLinkComponent,
    decorators: [
        moduleMetadata({
            imports: [RouterTestingModule],
        }),
    ],
    argTypes: {
        shape: {
            control: 'radio',
            options: ['rounded', 'circle', 'none'],
            description: 'The shape of the button.',
        },
        type: {
            control: 'radio',
            options: ['internal', 'external'],
            description: 'The type of the button.',
        },
        variant: {
            control: 'radio',
            options: ['primary', 'secondary', 'ghost', 'none'],
            description: 'The variant of the button.',
        },
        href: {
            control: 'text',
            description: 'The href of the link.',
        },
    },
} as Meta<KtLinkComponent>;

const Template: Story<KtLinkComponent> = args => ({
    props: args,
    template: `<kt-link [shape]='shape' [type]='type' [variant]='variant' [href]='href'>Click me</kt-link>`,
});

export const Default = Template.bind({});
Default.args = {
    href: 'https://www.google.com',
};

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
    type: 'external',
};
