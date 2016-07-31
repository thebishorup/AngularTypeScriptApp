import { Component } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwoWayDatabindingComponent } from './two-way-databinding.component';

@Component({
    moduleId: module.id,
    selector: 'fa-databinding',
    templateUrl: 'databinding.component.html',
    styleUrls: ['databinding.component.css'],
    directives: [PropertyBindingComponent, EventBindingComponent, TwoWayDatabindingComponent]
})

export class DataBindingComponent {
    stringInterpolation = 'This is interpolated string!';
    numberInterpolation = 334;

    onTest() {
        return true;
    }

    onclicked(value: string) {
        alert(value);
    }
}
