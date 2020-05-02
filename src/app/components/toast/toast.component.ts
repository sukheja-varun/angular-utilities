import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ToastService } from '@service/toast.service';
import { ToastI, ToastType } from 'src/app/models/toast.model';

@Component({
  selector: 'vs-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {


  toastList = [];
  clearToastTimeInSec = 5;
  toastSubscription: Subscription;

  // Configures each Toast's height and bottom position
  toastHeightInPx = 80;
  toastGapInPx = 20;


  constructor(private _toast: ToastService) { }

  /**
   * @description it subscribes to ToastService and listens when it gets a request to create new Toast.
   * Internally it calls pushToast() on every new request from service.
   *
   * @memberof ToastComponent
   */
  ngOnInit() {
    this.toastSubscription = this._toast.getObservable()
      .subscribe((toast: ToastI) => {
        if (toast) {
          // If we get toast then push it and display on screen
          this.pushToast(toast);
        } else {
          // If we get undefined then clear all toast
          this.removeAllToast();
        }
      });
  }

  /**
   * @description it creates a new Toast and auto clears that toast
   *
   * @param {ToastI} toast
   * @memberof ToastComponent
   */
  pushToast(toast: ToastI) {
    this.toastList.unshift(toast);
    // It auto removes the Toast
    setTimeout(() => {
      this.toastList.pop();
    }, this.clearToastTimeInSec * 1000);
  }

  /**
   * @description it clears a particular Toast when user clicks close button
   *
   * @param {number} index
   * @memberof ToastComponent
   */
  onRemoveToast(index: number) {
    this.toastList.splice(index, 1);
  }

  /**
   * @description it clears all the toast already displayed on screen.
   *
   * @memberof ToastComponent
   */
  removeAllToast() {
    this.toastList = [];
  }

  /**
   * @description It gives the css class corresponding to Toast Type
   *
   * @param {ToastI} toast
   * @returns
   * @memberof ToastComponent
   */
  getCssClass(toast: ToastI) {
    if (!toast) {
      return;
    }
    switch (toast.type) {
      case ToastType.SUCCESS:
        return 'border-success';
      case ToastType.ERROR:
        return 'border-danger';
      case ToastType.INFO:
        return 'border-info';
      case ToastType.WARNING:
        return 'border-warning';
    }
  }

  /**
   * @description It gives the icon class and icon color to be displayed
   *
   * @param {ToastI} toast
   * @returns
   * @memberof ToastComponent
   */
  getIcon(toast: ToastI) {
    if (!toast) {
      return;
    }
    switch (toast.type) {
      case ToastType.SUCCESS:
        return 'icon-success text-success';
      case ToastType.ERROR:
        return 'icon-error text-danger';
      case ToastType.INFO:
        return 'icon-info text-info';
      case ToastType.WARNING:
        return 'icon-warning text-warning';
    }
  }

  ngOnDestroy(): void {
    this.toastSubscription.unsubscribe();
  }


}
