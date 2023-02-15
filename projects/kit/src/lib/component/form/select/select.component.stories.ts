import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { KtSelectComponent } from './select.component';

const name: string = 'field';

export default {
    title: 'Components / Forms / Select',
    component: KtSelectComponent,
    decorators: [
        moduleMetadata({
            imports: [ReactiveFormsModule, JsonPipe],
        }),
    ],
    argTypes: {
        name: {
            control: 'text',
            description: 'The name of the control.',
        },
        hint: {
            control: 'text',
            description: 'The hint of the control.',
        },
    },
} as Meta<KtSelectComponent>;

const Template: Story<KtSelectComponent & { required?: boolean }> = args => {
    const formGroup = new FormGroup({
        [name]: new FormControl(''),
    });

    if (args.required) {
        formGroup.get(name)?.setValidators([Validators.required]);
    }

    return {
        props: { ...args, formGroup },
        template: `
            <form style='width: 360px' [formGroup]='formGroup'>
                <kt-select [hint]='hint' [name]='name'>
                    Field
                    <option disabled selected value>Select</option>
                    <option value='angular'>Angular</option>
                    <option value='npm'>NPM</option>
                    <option value='storybook'>Storybook</option>
                </kt-select>
                <pre style='background: #191919; color: #ffffff; padding: 12px; border-radius: 8px; font-size: 14px; white-space: nowrap'>
                    {{ formGroup.get(name).value | json }}
                </pre>
            </form>
        `,
    };
};

export const Default = Template.bind({});
Default.args = {
    name: name,
};

export const Hint = Template.bind({});
Hint.args = {
    ...Default.args,
    hint: 'This is a hint',
};

export const Required = Template.bind({});
Required.args = {
    ...Default.args,
    required: true,
};
