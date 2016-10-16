/**
 * Created by djavrell on 10/10/16.
 */

import {
  Component,
  Input,
  OnInit
}                     from '@angular/core';

import { DataModel } from '../../model/data.model';

const CSS = `
.chart-legend,
.bar-legend,
.line-legend,
.pie-legend,
.radar-legend,
.polararea-legend,
.doughnut-legend {
  list-style-type: none;
  margin-top: 5px;
  text-align: center;
  -webkit-padding-start: 0;
  -moz-padding-start: 0;
  padding-left: 0
}

.chart-legend li,
.bar-legend li,
.line-legend li,
.pie-legend li,
.radar-legend li,
.polararea-legend li,
.doughnut-legend li {
  display: inline-block;
  white-space: nowrap;
  position: relative;
  margin-bottom: 4px;
  border-radius: 5px;
  padding: 2px 8px 2px 28px;
  font-size: smaller;
  cursor: default
}

.chart-legend li span, 
.bar-legend li span, 
.line-legend li span, 
.pie-legend li span, 
.radar-legend li span, 
.polararea-legend li span, 
.doughnut-legend li span {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 5px
}
.chart {display: block; width: 100%;}
`;

const HTML = `
<div>
  <!--<base-chart [datasets]="data"-->
              <!--[options]="Options"-->
              <!--[colors]="Colors"-->
              <!--[chartType]="Type"-->
              <!--[labels]="Labels"-->
              <!--[legend]="Legend"-->
              <!--(chartHover)="chartHovered($event)"-->
              <!--(chartClick)="chartClicked($event)"-->
  <!--&gt;</base-chart>-->
<pre>
{{data | json}}

{{Labels}}
</pre>
</div>
`;

@Component({
  selector: 'gf-graph',
  template: HTML,
  styles  : [CSS]
})
export class GraphComponent implements OnInit {
  @Input() data: DataModel;

  public Options:any = {
    animation: false,
    responsive: true
  };

  // public Labels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public Labels:Array<any> = [];

  public Colors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public Legend:boolean = true;
  public Type:string = 'line';

  ngOnInit() {
    //console.log(this.data.length);
    for (let i: number = 0; i <= 60; i += 10) {
      this.Labels.push(i.toString());
    }
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
