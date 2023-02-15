import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    standalone: true,
    selector: 'kt-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [],
})
export class KtToastComponent {
    @Input()
    type: 'success' | 'error' = 'success';
}
