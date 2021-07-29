import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
})
export class ContactInformationComponent implements OnInit {
  @Input()
  parent: FormGroup = new FormGroup({});
  constructor() {}

  ngOnInit(): void {}
  onRemoveContact(idx: number) {
    const control = this.parent.get('contacts') as FormArray;
    control.removeAt(idx);
  }

  get contacts(){
    return (this.parent.get('contacts') as FormArray).controls;
  }

  getContact(idx:number){
    return (this.parent.get('contacts') as FormArray).at(idx) as FormGroup
  }
}
