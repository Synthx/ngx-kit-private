import { Component, Input } from '@angular/core';
import { FirstLetterPipe } from '../../../pipe';
import { NgIf } from '@angular/common';

@Component({
    standalone: true,
    selector: 'kt-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
    imports: [FirstLetterPipe, NgIf],
})
export class KtAvatarComponent {
    @Input()
    name!: string;

    @Input()
    picture?: string;

    @Input()
    shape: 'rounded' | 'circle' | 'none' = 'rounded';

    @Input()
    fallback: 'initials' | 'image' = 'initials';
}
