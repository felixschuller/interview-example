import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mysteryThing'})
export class MysteryThing implements PipeTransform {
    transform(value: string) {
        return value.split('').reverse().join('');
    }
    
}