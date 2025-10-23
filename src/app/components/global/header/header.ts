import { Component } from '@angular/core';

import { Logo } from './logo/logo';
import { MainNav } from './main-nav/main-nav';


@Component({
  selector: 'app-header',
  imports: [Logo, MainNav],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
