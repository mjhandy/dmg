import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

import { SvgIcons } from '../../../../services/svg-icons';

@Component({
  selector: 'app-footer-social',
  imports: [MatIconModule],
  templateUrl: './footer-social.html',
  styleUrl: './footer-social.scss'
})
export class FooterSocial {

  constructor(
    private svgIcons: SvgIcons
  ) 
  {
    // Icons are automatically registered when the service is injected
  }

}
