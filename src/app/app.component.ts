import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'shell';
  ngVersion = require('../../package.json').dependencies['@angular/core'];
  constructor() {}
}
