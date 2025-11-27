import { Component } from '@angular/core';
import { HeroBanner } from '../../global/hero-banner/hero-banner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formConfig } from './form-config';

@Component({
  selector: 'app-contact-us',
  imports: [HeroBanner],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {
  parentComp = "page-contactUs";

  constructor(
    
  ) { }

  

}
