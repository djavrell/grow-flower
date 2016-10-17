/**
 * Created by djavrell on 06/10/16.
 */

import { Component }    from '@angular/core';

@Component({
  selector: 'gf-menu',
  template: `
<div class="menu" >
  <gf-title [title]="'Grow Flower'" ></gf-title>
</div>
`,
  styles  : [`
    .menu {
        height: 60px;
        background: rgba(24, 60, 7, 0.4);
        padding: 0;
        margin: 0;
    }
  `]
})
export class MenuComponent {
}