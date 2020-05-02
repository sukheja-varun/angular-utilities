import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CheckInternetService } from '@service/check-internet.service';


@Component({
  selector: 'vs-no-internet',
  templateUrl: './no-internet.component.html',
  styleUrls: ['./no-internet.component.scss']
})
export class NoInternetComponent implements OnInit, OnDestroy {

  connectivitySubs$: Subscription;
  isInternetActive = false;

  constructor(private _checkInternet: CheckInternetService) { }

  ngOnInit() {
    this.connectivitySubs$ = this._checkInternet
      .checkConnectivity()
      .subscribe((isOnline) => {
        console.log('isOnline', isOnline);
        this.isInternetActive = isOnline;
      });
  }

  ngOnDestroy(): void {
    this.connectivitySubs$.unsubscribe();
  }
}
