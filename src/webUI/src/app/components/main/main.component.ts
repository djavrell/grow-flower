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
<gf-graph
  [data]="lineChartData"
></gf-graph>
<button (click)="fetch_data()" >fetch_data</button>
<pre>
{{data | json}}
</pre>
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
          this.data.pop();
          this.data.push(data);
        },
        err => console.log('error fetching data')
      );
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
