import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormService } from '../form.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @Input()
  parent: FormGroup = new FormGroup({});
  organizations!: Observable<string[]> | undefined;
  options!: string[];
  constructor(private formService: FormService) {}

  ngOnInit(): void {
     this.formService
      .getOrganizations()
      .subscribe((names: any) => {
        console.log(names);
        this.options = names;
      });
  

    this.organizations = this.parent
      .get('detail.organization')
      ?.valueChanges.pipe(
        startWith(''),
        map((value) => {
          console.log(this.options)
          return this._filter(value)
        })
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options?.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }


  get name() {
    return this.parent.get('detail.name');
  }
  get organization() {
    return this.parent.get('detail.organization');
  }
  // get organizations() {
  //   return ['a','b','c'];
  // }
}
