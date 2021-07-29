import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  AbstractControl,
} from '@angular/forms';

interface Contact {
  type: string;
  contactLabel: string;
  emailOrPhone: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form = new FormGroup({
    detail: new FormGroup({
      name: new FormControl('', [
        Validators.required,
        FormComponent.nameValidator,
      ]),
      organization: new FormControl('', Validators.required),
    }),
    contacts: new FormArray([]),
  });

  static nameValidator(control: AbstractControl) {
    const regexp = /^[a-z]/i;
    const valid = regexp.test(control.value);
    return valid ? null : { invalidName: true };
  }

  static validateEmailOrPhone(control: AbstractControl) {
    const type = control.get('type')?.value;
    const emailOrPhone = control.get('emailOrPhone')?.value;

    const emailRegVal =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegVal =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    const isInvalid =
      (type === 'email' && !emailRegVal.test(emailOrPhone)) ||
      (type === 'phone' && !phoneRegVal.test(emailOrPhone));

    return isInvalid ? { invalidVal: true } : null;
  }

  getEmptyContact() {
    return new FormGroup(
      {
        type: new FormControl('', Validators.required),
        contactLabel: new FormControl('', Validators.required),
        emailOrPhone: new FormControl('', Validators.required),
      },
      FormComponent.validateEmailOrPhone
    );
  }

  onAddContact() {
    const control = this.form.get('contacts') as FormArray;
    control.push(this.getEmptyContact());
  }



  onSubmit() {
    alert('User saved successfully');
    console.log(this.form.value);
    this.form.reset();
  }

  // get name() {
  //   return this.form.get('detail.name');
  // }

  // get contacts() {
  //   return (this.form.get('contacts') as FormArray).controls;
  // }
}
