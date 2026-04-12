import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

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
  submissionSuccess: boolean = false;

  noInjectionValidator = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (typeof value !== 'string' || !value) {
      return null;
    }

    const lowerValue = value.toLowerCase();
    const injectionPattern = /<\s*script\b|<\s*\/\s*script\b|javascript:|on\w+\s*=|<[^>]+>|%3c|%3e/;

    return injectionPattern.test(lowerValue) ? { injection: true } : null;
  };

  constructor(
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/), this.noInjectionValidator]],
      email: ['', [Validators.required, Validators.email, this.noInjectionValidator]],
      message: ['', [Validators.required, this.noInjectionValidator]]
    });
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/), this.noInjectionValidator]],
      email: ['', [Validators.required, Validators.email, this.noInjectionValidator]],
      subject: ['', [Validators.required, this.noInjectionValidator]],
      message: ['', [Validators.required, this.noInjectionValidator]]
    });
  }

  onSubmit() {
    this.isFormSubmitted = true;
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) {
      return;
    }

    this.submissionSuccess = true;
    window.location.href = this.getMailtoLink();
  }

  getMailtoLink(): string {
    const values = this.contactForm.value;
    const subjectText = values.subject ? `${values.subject} - Contact request from website` : 'Contact request from website';
    const subject = encodeURIComponent(subjectText);
    const bodyParts = [
      `Name: ${values.fullName ?? ''}`,
      `Email: ${values.email ?? ''}`,
      `Subject: ${values.subject ?? ''}`,
    ];

    bodyParts.push(`Message: ${values.message ?? ''}`);

    const body = encodeURIComponent(bodyParts.join('\n'));
    return `mailto:dmg@outlook.com?subject=${subject}&body=${body}`;
  }

  onFieldBlur(controlName: string) {
    const control = this.contactForm.get(controlName);
    if (control) {
      control.markAsTouched();
      control.updateValueAndValidity();
    }
  }

  onClear() {
    this.contactForm.reset({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
    this.isFormSubmitted = false;
    this.submissionSuccess = false;
  }

}
