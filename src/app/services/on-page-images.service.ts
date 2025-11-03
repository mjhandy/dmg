import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';

export interface OnPageImage {
  _id: string;
  mobileImg: string;
  desktopImg: string;
  published: boolean;
  altTag: string;
}

@Injectable({
  providedIn: 'root'
})
export class OnPageImagesService {
  private readonly jsonUrl = '/json/onPage-images.json';
  private readonly imagesCache$: Observable<OnPageImage[]>;

  constructor(private http: HttpClient) {
    // Cache the HTTP request to avoid multiple fetches
    this.imagesCache$ = this.http.get<OnPageImage[]>(this.jsonUrl).pipe(
      shareReplay(1)
    );
  }

  /**
   * Get all images
   */
  getAllImages(): Observable<OnPageImage[]> {
    return this.imagesCache$;
  }

  /**
   * Get published images only
   */
  getPublishedImages(): Observable<OnPageImage[]> {
    return this.imagesCache$.pipe(
      map(images => images.filter(img => img.published))
    );
  }

  /**
   * Get an image by its ID
   */
  getImageById(id: string): Observable<OnPageImage | undefined> {
    return this.imagesCache$.pipe(
      map(images => images.find(img => img._id === id))
    );
  }

  /**
   * Get a random image (optionally from published only)
   */
  getRandomImage(publishedOnly = true): Observable<OnPageImage | undefined> {
    return this.imagesCache$.pipe(
      map(images => {
        const filtered = publishedOnly ? images.filter(img => img.published) : images;
        if (filtered.length === 0) return undefined;
        const randomIndex = Math.floor(Math.random() * filtered.length);
        return filtered[randomIndex];
      })
    );
  }
}