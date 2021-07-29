import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import {MatButtonModule} from '@angular/material/button';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { ContactInformationViewComponent } from './contact-information-view/contact-information-view.component';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormService } from './form.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FormComponent,
    UserProfileComponent,
    ContactInformationComponent,
    ContactInformationViewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,
    MatDividerModule,
    MatAutocompleteModule
  ],
  providers:[
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
    FormService
  ]
})
export class FormModule { }
