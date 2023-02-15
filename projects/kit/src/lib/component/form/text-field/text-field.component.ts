import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import {
    ControlContainer,
    ControlValueAccessor,
    FormControl,
    FormControlDirective,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    standalone: true,
    selector: 'kt-text-field',
    templateUrl: './text-field.component.html',
    styleUrls: ['./text-field.component.scss'],
    imports: [ReactiveFormsModule, NgIf],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => KtTextFieldComponent),
            multi: true,
        },
    ],
})
export class KtTextFieldComponent implements ControlValueAccessor {
    @ViewChild(FormControlDirective, { static: true })
    formControlDirective!: FormControlDirective;

    @Input()
    name!: string;

    @Input()
    type: 'text' | 'password' | 'email' | 'number' = 'text';

    @Input()
    autocomplete: string | 'off' = 'off';

    @Input()
    hint?: string;

    get control(): FormControl {
        return this.controlContainer.control?.get(this.name) as FormControl;
    }

    get isRequired(): boolean {
        return this.control.validator?.({} as FormControl)?.['required'] === true;
    }

    get isInvalid(): boolean {
        return this.control.touched && this.control.invalid;
    }

    constructor(private controlContainer: ControlContainer) {}

    writeValue(value: any): void {
        this.formControlDirective.valueAccessor?.writeValue(value);
    }

    registerOnChange(fn: any): void {
        this.formControlDirective.valueAccessor?.registerOnChange(fn);
    }

    registerOnTouched(fn: any): void {
        this.formControlDirective.valueAccessor?.registerOnTouched(fn);
    }
}
