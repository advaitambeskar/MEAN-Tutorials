### AngularJS Tutorial

SOURCE
----
- docs: https://angular.io/guide

STEPS
----
- npm install -g @angular/cli
- ng new 'my-app'
- cd my-app
- ng serve --open (--open allows automatic launching of browser)

 - Component: ng generate component heroes
 - Selector name in the component.ts file is the tag used when referencing the component in other html files.
 - Two-way binding: [(ngModel)] = 'bound-data'
 - For-loop: *ngFor = 'let elements in list'
 - If: *ngIf = 'condition'
 - onClick Event: (click) = 'functionName()'
 - onClick Event needs an associated eventListener on the component.ts side