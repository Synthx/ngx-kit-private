import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective } from '@angular/forms';
import { Input, ViewChild } from '@angular/core';
import { KtFormConfig } from '../token/form-config-token';

export abstract class BasicReactiveFormField implements ControlValueAccessor {
    @ViewChild(FormControlDirective, { static: true })
    protected formControlDirective!: FormControlDirective;

    @Input()
    name!: string;

    protected get control(): FormControl {
        return this.controlContainer.control?.get(this.name) as FormControl;
    }

    protected get isRequired(): boolean {
        return this.control.validator?.({} as FormControl)?.['required'] === true;
    }

    protected get isInvalid(): boolean {
        return this.control.touched && this.control.invalid;
    }

    protected get error(): string | undefined {
        if (this.control.errors) {
            const key = Object.keys(this.control.errors)[0];
            if (this.config && this.config[key]) {
                return this.config[key];
            }

            return key;
        }

        return undefined;
    }

    protected constructor(protected controlContainer: ControlContainer, protected config?: KtFormConfig) {}

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
