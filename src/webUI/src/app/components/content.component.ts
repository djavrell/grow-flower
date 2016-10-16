/**
 * Created by djavrell on 10/10/16.
 */

import { Component }    from '@angular/core';
import { ConnectionBackend } from "@angular/http";

@Component({
  selector: 'gf-content',
  template: `
<div class="container" >
  <div class="left" >
    <gf-side-panel></gf-side-panel>
  </div>
  <div class="right" >
    <gf-main></gf-main>
  </div>
</div>
`,
  styles  : [`
    .container {
      display: flex;
      
      padding: 0;
      width: 100%;
      height: 100%;
    }
    
    .left {
      width: 15%;

      left: 0;
    }
    
    .right {
      width: 85%;
      right: 0;
    }
  `],
  providers: []
})
export class ContentComponent {
}
