import { Component, forwardRef, Inject, Input, Optional } from '@angular/core';
import { BasicReactiveFormFieldComponent } from '../../../../core/model/basic-reactive-form-field.component';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { KT_FORM_CONFIG_TOKEN, KtFormConfig } from '../../../../core/token';

@Component({
    standalone: true,
    selector: 'kt-select',
    templateUrl: './select.component.html',
    imports: [ReactiveFormsModule, NgIf],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => KtSelectComponent),
            multi: true,
        },
    ],
})
export class KtSelectComponent extends BasicReactiveFormFieldComponent implements ControlValueAccessor {
    @Input()
    hint?: string;

    constructor(
        protected override controlContainer: ControlContainer,
        @Optional() @Inject(KT_FORM_CONFIG_TOKEN) protected override config?: KtFormConfig,
    ) {
        super();
    }
}
