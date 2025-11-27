import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { HeroBanner } from '../../global/hero-banner/hero-banner';
import { formConfig } from './form-config';


@Component({
  selector: 'app-contact-us',
  imports: [HeroBanner, ReactiveFormsModule, ],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {
  parentComp = "page-contactUs";
  form!: FormGroup;
  ff = formConfig;
  field: any;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const group: any = {};
    this.ff.forEach((field: { label: string | number; }) => {
      group[field.label] = new FormControl('');
    });
    this.form = new FormGroup(group);
    console.debug(this.ff);
  }

  submitForm() {
    console.log(this.form.value);
  }


}
