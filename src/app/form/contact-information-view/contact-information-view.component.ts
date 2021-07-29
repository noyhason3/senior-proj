import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'contact-information-view',
  templateUrl: './contact-information-view.component.html',
  styleUrls: ['./contact-information-view.component.scss'],
})
export class ContactInformationViewComponent implements OnInit {
  @Input()
  parent!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
