import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { HeroBanner } from '../../global/hero-banner/hero-banner';
import { formConfig } from './form-config';


@Component({
  selector: 'app-contact-us',
  imports: [HeroBanner, ReactiveFormsModule,],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {
  parentComp = "page-contactUs";
  contactForm: FormGroup;
  isFormSubmitted: boolean = false;
  constructor(

  ) {
    this.contactForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]), // Using the 'required' validator
    });
  }

  ngOnInit() {

  }

onSubmit() {
 this.contactForm.valid;
 this.isFormSubmitted = true;
}


}
