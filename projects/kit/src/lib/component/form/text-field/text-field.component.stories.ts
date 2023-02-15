import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { KtTextFieldComponent } from './text-field.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

const name: string = 'field';

export default {
    title: 'Components / Forms / TextField',
    component: KtTextFieldComponent,
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
        type: {
            control: 'radio',
            options: ['text', 'password', 'email', 'number'],
            description: 'The type of the control.',
        },
        hint: {
            control: 'text',
            description: 'The hint of the control.',
        },
    },
} as Meta<KtTextFieldComponent>;

const Template: Story<KtTextFieldComponent & { required?: boolean; invalid?: boolean }> = args => {
    const formGroup = new FormGroup({
        [name]: new FormControl(''),
    });

    if (args.required) {
        formGroup.get(name)?.setValidators([Validators.required]);
    }
    if (args.invalid) {
        setTimeout(() => formGroup.get(name)?.setErrors({ invalid: true }), 0);
    }

    return {
        props: { ...args, formGroup },
        template: `
            <form style='width: 360px' [formGroup]='formGroup'>
                <kt-text-field [autocomplete]='autocomplete' [hint]='hint' [name]='name' [type]='type'>Field</kt-text-field>
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

export const Type = Template.bind({});
Type.args = {
    ...Default.args,
    type: 'password',
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

export const Invalid = Template.bind({});
Invalid.args = {
    ...Default.args,
    invalid: true,
};
