import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    standalone: true,
    name: 'firstLetter',
})
export class FirstLetterPipe implements PipeTransform {
    transform(value: string): string {
        return value
            .split(' ')
            .map(word => word[0])
            .join('');
    }
}
