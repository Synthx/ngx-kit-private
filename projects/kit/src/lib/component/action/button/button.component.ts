import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KtSpinnerComponent } from '../../indicator';
import { NgIf } from '@angular/common';

@Component({
    standalone: true,
    selector: 'kt-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    imports: [KtSpinnerComponent, NgIf],
})
export class KtButtonComponent {
    @Input()
    shape: 'rounded' | 'circle' | 'none' = 'rounded';

    @Input()
    variant: 'primary' | 'outlined' | 'plain' = 'primary';

    @Input()
    type: 'button' | 'submit' | 'reset' = 'button';

    @Input()
    disabled: boolean = false;

    @Input()
    loading: boolean = false;

    @Output()
    onTap = new EventEmitter<MouseEvent>();
}
