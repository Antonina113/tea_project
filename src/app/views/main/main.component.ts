import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subscription} from "rxjs";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private observable: Observable<boolean>;
  private subscribe: Subscription | null = null;
  public showPopup: boolean = false;

  constructor() {
    this.observable = new Observable((observer) => {
        setTimeout(() => {
          observer.next(true);
        }, 10000)
      }
    )
  }
  ngOnInit() {
    this.subscribe = this.observable.subscribe((params: boolean) =>  this.showPopup = params)
  }
  ngOnDestroy() {
    this.subscribe?.unsubscribe();
  }

  hidePopup(){
    this.showPopup = false;
  }
}
