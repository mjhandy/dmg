import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { HeroBanner } from '../../global/hero-banner/hero-banner';


@Component({
  selector: 'app-contact-us',
  imports: [HeroBanner, ReactiveFormsModule,],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {
  parentComp = "page-contactUs";
  form!: FormGroup;
  field: any;

  formConfig = [
    { label: 'Name', inputType: 'text' },
    { label: 'Email', inputType: 'email' },
  ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const group: any = {};
    this.formConfig.forEach((field: { label: string | number; }) => {
      group[field.label] = new FormControl('');
    });
    this.form = new FormGroup(group);
    console.debug(this.formConfig);
  }

  submitForm() {
    console.log(this.form.value);
  }


}
