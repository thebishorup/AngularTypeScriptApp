import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'fa-event-binding',
    template: `
        <button style="padding:10px; cursor: pointer; width: 200px; background-color: green; color: white; " (click)="onclicked()">
        Binding Custom Event!</button>
    `,
    styles: []
})

export class EventBindingComponent {
    //Custom event binding
    @Output('clickables') clicked = new EventEmitter<string>();

    onclicked() {
        this.clicked.emit('Custom event binding works!');
    }

    //This is classic event binding
    // onclicked() {
    //     alert('This is due to the custom event like click, mouseover, blur ...');
    // }
}
