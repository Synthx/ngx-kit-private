import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KtSpinnerComponent } from '../../indicator';
import { NgIf } from '@angular/common';
import { KtIcon, KtIconComponent } from '../../icon/icon.component';
import { Nullable } from '../../../../core/model/nullable';

@Component({
    standalone: true,
    selector: 'kt-button',
    templateUrl: './button.component.html',
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
    icon?: KtIcon;

    @Input()
    disabled: Nullable<boolean> = false;

    @Input()
    loading: Nullable<boolean> = false;

    @Output()
    onTap = new EventEmitter<MouseEvent>();
}
