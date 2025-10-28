import { Component } from '@angular/core';
import { Logo } from '../logo/logo';

import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-main-nav',
  imports: [Logo, MatIconModule ],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.scss'
})
export class MainNav {

}
