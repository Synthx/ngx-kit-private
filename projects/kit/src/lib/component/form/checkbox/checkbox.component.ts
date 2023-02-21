import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'kt-checkbox',
    templateUrl: './checkbox.component.html',
    imports: [FormsModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => KtCheckboxComponent),
            multi: true,
        },
    ],
})
export class KtCheckboxComponent implements ControlValueAccessor {
    checked: boolean = false;

    onChange: any = () => {};
    onTouch: any = () => {};

    @Input()
    id!: string;

    valueChanged(checked: boolean): void {
        this.checked = checked;
        this.onChange(checked);
    }

    writeValue(value: boolean): void {
        this.checked = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }
}
