import { Component, Input } from '@angular/core';

@Component({
    standalone: true,
    selector: 'kt-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    imports: [],
})
export class KtSpinnerComponent {
    @Input()
    size: 'small' | 'medium' | 'large' = 'medium';
}
