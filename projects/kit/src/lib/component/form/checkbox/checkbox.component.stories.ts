import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { KtCheckboxComponent } from './checkbox.component';

const name: string = 'field';

export default {
    title: 'Components / Forms / Checkbox',
    component: KtCheckboxComponent,
    decorators: [
        moduleMetadata({
            imports: [ReactiveFormsModule, JsonPipe],
        }),
    ],
    argTypes: {
        id: {
            control: 'text',
            description: 'The id of the checkbox.',
        },
    },
} as Meta<KtCheckboxComponent>;

const Template: Story<KtCheckboxComponent> = args => {
    const formGroup = new FormGroup({
        [name]: new FormControl(false),
    });

    return {
        props: { ...args, formGroup, name },
        template: `
            <form style='width: 360px' [formGroup]='formGroup'>
                <kt-checkbox [formControlName]='name' [id]='id'>Field</kt-checkbox>
                <pre style='background: #191919; color: #ffffff; padding: 12px; border-radius: 8px; font-size: 14px; white-space: nowrap'>
                    {{ formGroup.get(name).value | json }}
                </pre>
            </form>
        `,
    };
};

export const Default = Template.bind({});
Default.args = {
    id: name,
};
