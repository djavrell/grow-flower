import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
<h1>Grow Flower</h1>
<router-outlet></router-outlet>
    `
})
export class App {
}

@Component({
    selector: 'home',
    template: `
Home component
test
    `
})
export class Home {
}
