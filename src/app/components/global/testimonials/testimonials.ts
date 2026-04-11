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

  stars = [1, 2, 3, 4, 5];

  silderID = 'slideID-' + this.randomString(5);

  randomString(length: number) {

    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * length));
    }
    return result;
  }

  getRating(review: any): number {
    return Number(review?.rating) || 0;
  }

  getStarIcon(review: any, star: number): string {
    const rating = this.getRating(review);
    if (rating >= star) {
      return 'star';
    }
    if (rating + 0.5 >= star) {
      return 'star_half';
    }
    return 'star_border';
  }

}
