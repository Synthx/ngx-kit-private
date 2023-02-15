import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { KtIconComponent } from '../../icon';
import { KtIconButtonComponent } from '../../action';

@Component({
    standalone: true,
    selector: 'kt-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [KtIconComponent, KtIconButtonComponent],
})
export class KtDialogComponent {
    @Output()
    onClose = new EventEmitter<void>();
}
