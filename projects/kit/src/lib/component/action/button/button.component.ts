import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KtSpinnerComponent } from '../../indicator';
import { NgIf } from '@angular/common';
import { KtIconComponent } from '../../icon';

@Component({
    standalone: true,
    selector: 'kt-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    imports: [NgIf, KtSpinnerComponent, KtIconComponent],
})
export class KtButtonComponent {
    @Input()
    shape: 'rounded' | 'circle' | 'none' = 'rounded';

    @Input()
    variant: 'primary' | 'secondary' | 'ghost' = 'primary';

    @Input()
    type: 'button' | 'submit' | 'reset' = 'button';

    @Input()
    icon?: string;

    @Input()
    disabled: boolean = false;

    @Input()
    loading: boolean = false;

    @Output()
    onTap = new EventEmitter<MouseEvent>();
}
