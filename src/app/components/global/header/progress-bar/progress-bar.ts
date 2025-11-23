import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss'
})
export class ProgressBar {

divWidth: number = 0; // Initial width

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollTop  = window.scrollY;
    const viewportHeight   = window.innerHeight; // Height of the viewport
    const scrollPercentage = (scrollTop / viewportHeight) * 100; // Percentage of viewport height


    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    // console.debug(scrolled);
    // this.divWidth = 1 + scrollPosition  /  2; // Adjust multiplier as needed
    this.divWidth = scrolled;
  }

}
