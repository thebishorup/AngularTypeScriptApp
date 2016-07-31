import {
    Component,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Input,
    ViewChild
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'fa-lifecycle',
    template: `
        <ng-content></ng-content>
        <p>Lifecycle Works</p>
        <h2 #boundedValue>{{bindableProperties}}</h2>
        <p>{{boundedValue.textContent}}</p>
    `
})

export class LifecycleComponent
implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{
    @Input() bindableProperties = 5000;
    @ViewChild('boundedValue') boundedValue: HTMLElement;

    constructor() {}

    ngOnInit() { this.log('OnInit'); }
    ngOnChanges() { this.log('OnChanges'); }
    ngDoCheck() { this.log('DoCheck'); }
    ngAfterContentInit() { this.log('AfterContentInit'); }
    ngAfterContentChecked() { this.log('AfterContentChecked'); }
    ngAfterViewInit() { this.log('AfterViewInit'); console.log(this.boundedValue); }
    ngAfterViewChecked() { this.log('AfterViewChecked'); }
    ngOnDestroy() { this.log('OnDestroy'); }

    private log(hook: string) {
        console.log(hook);

    }
}
