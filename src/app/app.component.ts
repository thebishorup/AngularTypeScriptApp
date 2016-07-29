import { Component } from '@angular/core';
import { DataBindingComponent } from './databinding/databinding.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <p>App Compopnent</p>
    <fa-databinding></fa-databinding>
  `,
  directives: [DataBindingComponent]
})

export class AppComponent {
  title = 'app works!';
}
