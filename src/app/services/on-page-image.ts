import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class OnPageImage {

  private url = '../json/testimonials.json';

  constructor(private httpClient: HttpClient) {

  }



}
