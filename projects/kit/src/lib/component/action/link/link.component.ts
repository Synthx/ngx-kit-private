import { Component, Input } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { KtIconComponent } from '../../icon/icon.component';

@Component({
    standalone: true,
    selector: 'kt-link',
    templateUrl: './link.component.html',
    imports: [NgTemplateOutlet, NgIf, RouterLink, KtIconComponent],
})
export class KtLinkComponent {
    @Input()
    shape: 'rounded' | 'circle' | 'none' = 'rounded';

    @Input()
    variant: 'primary' | 'secondary' | 'ghost' | 'none' = 'primary';

    @Input()
    type: 'internal' | 'external' = 'internal';

    @Input()
    href!: string;
}
