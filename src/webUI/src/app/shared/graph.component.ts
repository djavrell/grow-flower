/**
 * Created by djavrell on 10/10/16.
 */

import {
  Component,
  Input
}    from '@angular/core';

const CSS = `
.chart-legend, .bar-legend, .line-legend, .pie-legend, .radar-legend, .polararea-legend, .doughnut-legend {
  list-style-type: none;
  margin-top: 5px;
  text-align: center;
  -webkit-padding-start: 0;
  -moz-padding-start: 0;
  padding-left: 0
}

.chart-legend li, .bar-legend li, .line-legend li, .pie-legend li, .radar-legend li, .polararea-legend li, .doughnut-legend li {
  display: inline-block;
  white-space: nowrap;
  position: relative;
  margin-bottom: 4px;
  border-radius: 5px;
  padding: 2px 8px 2px 28px;
  font-size: smaller;
  cursor: default
}

.chart-legend li span, .bar-legend li span, .line-legend li span, .pie-legend li span, .radar-legend li span, .polararea-legend li span, .doughnut-legend li span {
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
<base-chart [datasets]="data"
            [options]="lineChartOptions"
            [colors]="lineChartColors"
            [chartType]="lineChartType"
            [labels]="lineChartLabels"
            [legend]="lineChartLegend"
            (chartHover)="chartHovered($event)"
            (chartClick)="chartClicked($event)"
></base-chart>
`

@Component({
  selector: 'gf-graph',
  template: HTML,
  styles  : [CSS]
})
export class GraphComponent {
  @Input() data: any;

  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };

  // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
}
