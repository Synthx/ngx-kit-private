import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KtIconComponent } from '../../icon';

@Component({
    standalone: true,
    selector: 'kt-icon-button',
    templateUrl: './icon-button.component.html',
    styleUrls: ['./icon-button.component.scss'],
    imports: [KtIconComponent],
})
export class KtIconButtonComponent {
    @Input()
    icon!: string;

    @Input()
    variant: 'primary' | 'ghost' = 'primary';

    @Input()
    shape: 'rounded' | 'circle' | 'none' = 'rounded';

    @Output()
    onTap = new EventEmitter<MouseEvent>();
}
