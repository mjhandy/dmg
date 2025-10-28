import { Component } from '@angular/core';
import { MainNav } from './main-nav/main-nav';


@Component({
  selector: 'app-header',
  imports: [MainNav],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
