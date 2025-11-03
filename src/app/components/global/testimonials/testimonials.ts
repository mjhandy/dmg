import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-testimonials',
  imports: [MatIconModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {

  @Input() data: any;

  silderID = 'slideID-' + this.randomString(5);

  randomString(length: number) {

    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

}
