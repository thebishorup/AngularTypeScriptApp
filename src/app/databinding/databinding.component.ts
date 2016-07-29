import { Component } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';

@Component({
    moduleId: module.id,
    selector: 'fa-databinding',
    templateUrl: 'databinding.component.html',
    styleUrls: ['databinding.component.css'],
    directives: [PropertyBindingComponent]
})

export class DataBindingComponent {
    stringInterpolation = 'This is interpolated string!';
    numberInterpolation = 334;

    onTest(){
        return true;
    }
}
