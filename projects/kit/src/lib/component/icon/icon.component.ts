import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

export const ktIconData = ['add', 'close', 'eye', 'home'] as const;

@Component({
    standalone: true,
    selector: 'kt-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    imports: [NgStyle],
})
export class KtIconComponent {
    @Input()
    name!: (typeof ktIconData)[number];
}
