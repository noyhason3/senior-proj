import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterModule } from './counter/counter.module';
import { CounterComponent } from './counter/counter.component';
import { CounterService } from './counter/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CounterModule,
    BrowserAnimationsModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
