import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { SvgIcons } from '../../../../services/svg-icons';

@Component({
  selector: 'app-footer-logo',
  imports: [MatIconModule, RouterModule   ],
  templateUrl: './footer-logo.html',
  styleUrl: './footer-logo.scss'
})
export class FooterLogo {

  constructor(
    private svgIcons: SvgIcons
  ){}

}
