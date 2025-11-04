import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnPageImagesService, OnPageImage } from '../../../services/on-page-images.service';
import { Observable, BehaviorSubject, switchMap } from 'rxjs';

@Component({
  selector: 'app-body-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body-image.html',
  styleUrl: './body-image.scss'
})
export class BodyImage implements OnInit {
  // Optional: pass a specific image ID to load
  @Input() imageId?: string;
  // custom css
  @Input() css: string = '';
  
  // Observable for the currently displayed image
  currentImage$?: Observable<OnPageImage | undefined>;
  
  // Track loading state
  loading = new BehaviorSubject<boolean>(false);

  constructor(private imageService: OnPageImagesService) {}

  ngOnInit() {
    // If imageId is provided, load that specific image
    // Otherwise, load a random published image
    this.currentImage$ = this.imageId ? 
      this.imageService.getImageById(this.imageId) :
      this.imageService.getRandomImage();
  }

  // Method to load a new random image
  loadNewRandom() {
    this.loading.next(true);
    this.currentImage$ = this.imageService.getRandomImage().pipe(
      switchMap(async image => {
        this.loading.next(false);
        return image;
      })
    );
  }
}
