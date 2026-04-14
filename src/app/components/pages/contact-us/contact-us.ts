import { Component, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

import { HeroBanner } from '../../global/hero-banner/hero-banner';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-contact-us',
  imports: [HeroBanner, ReactiveFormsModule,MatButton],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {
  parentComp = "page-contactUs";
  contactForm!: FormGroup;
  isFormSubmitted: boolean = false;
  submissionSuccess: boolean = false;

  @ViewChild('contactFormElement', { read: ElementRef })
  contactFormElement!: ElementRef<HTMLFormElement>;

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
      this.trackContactFormSubmission(false);
      this.focusFirstInvalidControl();
      return;
    }

    this.trackContactFormSubmission(true);
    this.submissionSuccess = true;
    window.location.href = this.getMailtoLink();
  }

  private trackContactFormSubmission(isValid: boolean): void {
    const status = isValid ? 'valid' : 'invalid';
    console.debug(`Contact form submit: ${status}`);

    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'Contact Form Submit', {
        event_category: 'Form',
        event_label: status,
        value: isValid ? 1 : 0
      });
    }
  }

  private focusFirstInvalidControl(): void {
    if (!this.contactFormElement?.nativeElement) {
      return;
    }

    const firstInvalid = this.contactFormElement.nativeElement.querySelector('.is-invalid') as HTMLElement | null;
    if (!firstInvalid) {
      return;
    }

    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (typeof firstInvalid.focus === 'function') {
      firstInvalid.focus();
    }
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
