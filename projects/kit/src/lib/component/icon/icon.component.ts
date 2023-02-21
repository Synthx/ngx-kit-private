import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

export const ktIcons = ['add', 'chevron-down', 'close', 'external-link', 'eye', 'home'] as const;
export type KtIcon = (typeof ktIcons)[number];

@Component({
    standalone: true,
    selector: 'kt-icon',
    templateUrl: './icon.component.html',
    imports: [NgStyle],
})
export class KtIconComponent {
    @Input()
    name!: KtIcon;
}
