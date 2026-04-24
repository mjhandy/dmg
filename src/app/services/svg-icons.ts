import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SvgIcons {

  private iconPath = '/assets/icons/';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  private registerIcons(): void{
    const icons = [
      'logo_horizontal',
      'fb',
      'LinkedIn',
      'whatsapp'
    ];

icons.forEach(icon => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.iconPath}${icon}.svg`)
      );
    });

  }
  
}
