import {
  Component,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CounterService } from './counter.service';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})

export class CounterComponent implements OnInit {
  counter!: number;

  constructor(private counterService: CounterService, private router:Router) {}

  ngOnInit(): void {
    this.counterService.count$.subscribe(val => this.counter=val)
    this.router.events.subscribe((ev)=>{
      if (ev instanceof NavigationEnd){
        this.counterService.increaseCounter()
      }
    })
  }
}
