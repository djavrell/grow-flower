/**
 * Created by djavrell on 06/10/16.
 */

import {
  Component,
  Input
}                 from '@angular/core';

@Component({
  selector: 'gf-title',
  template: `
<div class="box" >
  <div class="left" >
    <h1>{{title}}</h1>
  </div>
</div>
`,
  styles  : [`
    .box {
        display: flex;
        padding: 0 20px;
        width: 100%;
    }

    .left {
        width: 30%;
        left: 0;
    }
    
    h1 {
      margin-top: 10px;
    }
  `]
})
export class TitleComponent {

  @Input() title: String = "";
}