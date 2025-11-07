
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solving-usability',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './solving-usability.html',
  styleUrl: './solving-usability.scss'
})
export class SolvingUsability {
  ngOnInit() {
    console.log('SolvingUsability component initialized');
    console.log('SolvingUsability template:', document.querySelector('app-solving-usability')?.innerHTML || 'Component not found in DOM');
  }
}
