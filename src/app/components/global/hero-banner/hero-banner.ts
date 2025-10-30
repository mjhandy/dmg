import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-hero-banner',
  imports: [],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss'
})
export class HeroBanner {
  @Input() parent!: string;
  banners: Record<string, any> = {};

  async ngOnInit(): Promise<void> {
    try {
      const res = await fetch('/json/hero-banners.json');
      if (!res.ok) throw new Error(`Failed to load hero banners: ${res.status}`);
      const data = await res.json();
      // If the JSON is an object mapping (recommended), use it directly.
      // If it's an array (legacy), merge array entries into an object.
      if (Array.isArray(data)) {
        // convert [ { key: {...} }, { key2: {...} } ] -> { key: {...}, key2: {...} }
        this.banners = Object.assign({}, ...data);
      } else {
        this.banners = data;
      }
    } catch (err) {
      // keep banners empty on error; you may want to log or surface this differently
      // console.error(err);
      this.banners = {};
    }
  }
}
