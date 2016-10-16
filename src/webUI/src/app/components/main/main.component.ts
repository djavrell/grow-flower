/**
 * Created by djavrell on 10/10/16.
 */

import {
  Component,
  OnInit
}                       from '@angular/core';
import { Observable }   from "rxjs";

import { DataService }  from "../../../service/data.service";
import { DataModel }    from '../../../model/data.model';

@Component({
  selector: 'gf-main',
  styles: [],
  template: `
<div class="row" >
<!--<pre>{{data | json}}</pre>-->
    <div *ngFor="let item of data" class="col-md-6" >
      <gf-graph
        [data]="item"
       ></gf-graph>
    </div>
</div>
`,
  providers: [
    DataService
  ]
})
export class MainComponent implements OnInit {
  constructor(private fd: DataService) {}

  data: DataModel[] = [];

  ngOnInit() {
    Observable
      .interval(1000)
      .startWith(0)
      .map(() => this.fetch_data())
      .subscribe();
  }

  fetch_data() {
    this.fd
      .getData()
      .subscribe(
        data => this.data = data,
        err => console.log('error on fetch data => ' + err)
      );
  }
}
