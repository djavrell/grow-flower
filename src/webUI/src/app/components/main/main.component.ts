/**
 * Created by djavrell on 10/10/16.
 */

import {
  Component,
  OnInit
}    from '@angular/core';
import { DataService } from "../../../service/data.service";
import { DataModel } from '../../../model/data.model';

@Component({
  selector: 'gf-main',
  styles: [],
  template: `
<div class="row" >
    <div *ngFor="let item of data" class="col-md-6" >
      <gf-graph
        [data]="item"
       ></gf-graph>
    </div>
</div>

<button (click)="fetch_data()" >fetch_data</button>
`,
  providers: [
    DataService
  ]
})
export class MainComponent implements OnInit {
  constructor(private fd: DataService) {}

  data: DataModel[] = [];

  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];

  ngOnInit() {
    this.fetch_data();
  }

  fetch_data(): void {
    this.fd
      .getData()
      .subscribe(
        data => {
          this.data = data;
        },
        err => console.log('error fetching data')
      );
  }
}
