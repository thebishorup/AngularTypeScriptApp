import { Component } from '@angular/core';
import { DataBindingComponent } from './databinding/databinding.component';
import { LifecycleComponent } from './lifecycle.components';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <p>App Compopnent</p>
    <fa-lifecycle [bindableProperties] = "newBindableValue">
      <button style="padding:10px; cursor: pointer; width: 200px; background-color: green; color: white;" 
        (click) = "newBindableValue = 5421351435">
      Click To Change New Value</button>
    </fa-lifecycle>
    <fa-databinding></fa-databinding>
  `,
  directives: [DataBindingComponent, LifecycleComponent]
})

export class AppComponent {
  newBindableValue = 1000;
  title = 'app works!';
}
