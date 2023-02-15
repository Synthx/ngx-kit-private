import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { KtIconComponent } from '../../icon';
import { KtIconButtonComponent } from '../../action';

@Component({
    standalone: true,
    selector: 'kt-drawer',
    templateUrl: './drawer.component.html',
    styleUrls: ['./drawer.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [KtIconComponent, KtIconButtonComponent],
})
export class KtDrawerComponent {
    @Output()
    onClose = new EventEmitter<void>();
}
