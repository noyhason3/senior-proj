import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CounterService {

  count$ = new BehaviorSubject<number>(0);
  
  public increaseCounter() {
    let num = this.count$.getValue();
    this.count$.next(++num);
  }
}