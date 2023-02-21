import { Component, ContentChild, forwardRef, Inject, Input, Optional } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { KtIconButtonComponent } from '../../action';
import { BasicReactiveFormFieldComponent } from '../../../../core/model/basic-reactive-form-field.component';
import { KT_FORM_CONFIG_TOKEN, KtFormConfig } from '../../../../core/token';

@Component({
    standalone: true,
    selector: 'kt-text-field',
    templateUrl: './text-field.component.html',
    imports: [ReactiveFormsModule, NgIf, NgTemplateOutlet],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => KtTextFieldComponent),
            multi: true,
        },
    ],
})
export class KtTextFieldComponent extends BasicReactiveFormFieldComponent implements ControlValueAccessor {
    @ContentChild(KtIconButtonComponent)
    action?: KtIconButtonComponent;

    @Input()
    type: 'text' | 'password' | 'email' | 'number' = 'text';

    @Input()
    autocomplete: string | 'off' = 'off';

    @Input()
    hint?: string;

    constructor(
        protected override controlContainer: ControlContainer,
        @Optional() @Inject(KT_FORM_CONFIG_TOKEN) protected override config?: KtFormConfig,
    ) {
        super();
    }
}
