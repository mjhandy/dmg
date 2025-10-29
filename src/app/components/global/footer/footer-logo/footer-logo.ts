import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer-logo',
  imports: [MatIconModule, RouterModule   ],
  templateUrl: './footer-logo.html',
  styleUrl: './footer-logo.scss'
})
export class FooterLogo {

}
