import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [MatIconModule, RouterModule],
  templateUrl: './logo.html',
  styleUrl: './logo.scss'
})
export class Logo {

}
