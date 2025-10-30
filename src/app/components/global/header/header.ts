import { Component } from '@angular/core';
import { MainNav } from './main-nav/main-nav';
import { ProgressBar } from './progress-bar/progress-bar';


@Component({
  selector: 'app-header',
  imports: [MainNav, ProgressBar],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
