import { Component, EventEmitter, Output } from '@angular/core';
import { KtIconComponent } from '../../icon/icon.component';
import { KtIconButtonComponent } from '../../action';

@Component({
    standalone: true,
    selector: 'kt-drawer',
    templateUrl: './drawer.component.html',
    imports: [KtIconComponent, KtIconButtonComponent],
})
export class KtDrawerComponent {
    @Output()
    onClose = new EventEmitter<void>();
}
