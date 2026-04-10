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
  contactForm!: FormGroup;
  isFormSubmitted: boolean = false;


  constructor(
    private fb: FormBuilder
  ) {
    this.contactForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]), // Using the 'required' validator
      email: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: [null],
      email: [null],
      message: [null]
    })
  }

  onSubmit() {
    this.contactForm.valid;
    this.isFormSubmitted = true;
  }

  allFieldsNull(): boolean {
    return Object.values(this.contactForm.value).every(value => value === null || value === '');
  }

}
