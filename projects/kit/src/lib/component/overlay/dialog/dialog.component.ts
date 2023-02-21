import { Component, EventEmitter, Output } from '@angular/core';
import { KtIconComponent } from '../../icon/icon.component';
import { KtIconButtonComponent } from '../../action';

@Component({
    standalone: true,
    selector: 'kt-dialog',
    templateUrl: './dialog.component.html',
    imports: [KtIconComponent, KtIconButtonComponent],
})
export class KtDialogComponent {
    @Output()
    onClose = new EventEmitter<void>();
}
