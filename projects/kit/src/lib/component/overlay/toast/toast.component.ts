import { Component, Input } from '@angular/core';

@Component({
    standalone: true,
    selector: 'kt-toast',
    templateUrl: './toast.component.html',
})
export class KtToastComponent {
    @Input()
    type: 'success' | 'error' = 'success';
}
