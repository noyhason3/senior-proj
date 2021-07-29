import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { CounterService } from './counter.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers:[CounterService]
})
export class CounterModule { }
