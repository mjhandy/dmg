import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-hero-banner',
  imports: [],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss'
})
export class HeroBanner {
  @Input() parent!: string;
}
