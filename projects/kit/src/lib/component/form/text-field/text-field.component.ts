import { Component, ContentChild, forwardRef, Inject, Input, Optional } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { KtIconButtonComponent } from '../../action';
import { BasicReactiveFormField } from '../../../../core/model/basic-reactive-form-field';
import { KT_FORM_CONFIG_TOKEN, KtFormConfig } from '../../../../core/token/form-config-token';

@Component({
    standalone: true,
    selector: 'kt-text-field',
    templateUrl: './text-field.component.html',
    styleUrls: ['./text-field.component.scss'],
    imports: [ReactiveFormsModule, NgIf, NgTemplateOutlet],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => KtTextFieldComponent),
            multi: true,
        },
    ],
})
export class KtTextFieldComponent extends BasicReactiveFormField {
    @ContentChild(KtIconButtonComponent)
    action?: KtIconButtonComponent;

    @Input()
    type: 'text' | 'password' | 'email' | 'number' = 'text';

    @Input()
    autocomplete: string | 'off' = 'off';

    @Input()
    hint?: string;

    constructor(controlContainer: ControlContainer, @Optional() @Inject(KT_FORM_CONFIG_TOKEN) config?: KtFormConfig) {
        super(controlContainer, config);
    }
}
