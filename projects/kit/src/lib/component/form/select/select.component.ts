import { Component, forwardRef, Inject, Input, Optional } from '@angular/core';
import { BasicReactiveFormField } from '../../../../core/model/basic-reactive-form-field';
import { ControlContainer, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { KT_FORM_CONFIG_TOKEN, KtFormConfig } from '../../../../core/token/form-config-token';

@Component({
    standalone: true,
    selector: 'kt-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    imports: [ReactiveFormsModule, NgIf],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => KtSelectComponent),
            multi: true,
        },
    ],
})
export class KtSelectComponent extends BasicReactiveFormField {
    @Input()
    hint?: string;

    constructor(controlContainer: ControlContainer, @Optional() @Inject(KT_FORM_CONFIG_TOKEN) config?: KtFormConfig) {
        super(controlContainer, config);
    }
}
