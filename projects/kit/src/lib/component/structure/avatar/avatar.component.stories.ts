import { Meta, Story } from '@storybook/angular';
import { KtAvatarComponent } from './avatar.component';

export default {
    title: 'Components / Structure / Avatar',
    component: KtAvatarComponent,
    argTypes: {
        name: {
            control: 'text',
            description: 'The name of the user.',
        },
        picture: {
            control: 'text',
            description: 'The picture url of the user.',
        },
        shape: {
            control: 'radio',
            options: ['rounded', 'circle', 'none'],
            description: 'The shape of the avatar.',
        },
        fallback: {
            control: 'radio',
            options: ['initials', 'image'],
            description: 'The fallback of the avatar.',
        },
    },
} as Meta<KtAvatarComponent>;

const Template: Story<KtAvatarComponent> = args => ({
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    name: 'John Doe',
    picture: 'https://elstar.themenate.net/img/avatars/thumb-1.jpg',
};

export const Shape = Template.bind({});
Shape.args = {
    ...Default.args,
    shape: 'circle',
};

export const Fallback = Template.bind({});
Fallback.args = {
    ...Default.args,
    picture: undefined,
    fallback: 'image',
};
