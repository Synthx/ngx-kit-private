import { Meta, Story } from '@storybook/angular';
import { KtSpinnerComponent } from './spinner.component';

export default {
    title: 'Components / Indicators / Spinner',
    component: KtSpinnerComponent,
    argTypes: {
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
            description: 'The size of the spinner.',
        },
    },
} as Meta<KtSpinnerComponent>;

const Template: Story<KtSpinnerComponent> = args => ({
    props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const Size = Template.bind({});
Size.args = {
    ...Default.args,
    size: 'large',
};
