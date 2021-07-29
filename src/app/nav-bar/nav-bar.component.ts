import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CounterService } from '../counter/counter.service';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @ViewChild('navBarLink') button!: ElementRef;
  constructor(private counterService: CounterService, private route:Router) {}
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true,
    },
    {
      link: '/auth',
      name: 'Auth',
      exact: true,
    },
    {
      link: '/form',
      name: 'Form',
      exact: true,
    },
    {
      link: '/oops',
      name: '404',
      exact: false,
    },
  ];

  increase() {
    console.log('Clicked the pluse button');
    this.counterService.increaseCounter()
  }
}
