import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'fa-two-way-binding',
    template: `
        <input style="padding:5px; width:200px;" type="text" [(ngModel)]="person.name" />
        <input style="padding:5px; width:200px;" type="text" [(ngModel)]="person.name" />
    `
})

export class TwoWayDatabindingComponent {
    person = {
        name: 'Bishorup',
        age: 28
    };
}
