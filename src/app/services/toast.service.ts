import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';

import { ToastI, ToastType } from '../models/toast.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private pushToastSubject = new Subject<ToastI>();
  public keepAfterRouteChange = true;

  constructor(public _router: Router) {
    // clear toast messages on route change unless 'keepAfterRouteChange' flag is true  
    _router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (!this.keepAfterRouteChange) {
          this.removeAllToast();
        }
      }
    });
  }

  /**
   * @description It is used to get the observable which sends the Toast Config object
   *
   * @returns
   * @memberof ToastService
   */
  getObservable() {
    return this.pushToastSubject.asObservable();
  }


  /**
   * @description It is used to send toast config to Toast component,
   * which is used to display toast on DOM.
   *
   * @private
   * @param {ToastType} type
   * @param {string} message
   * @param {string} title
   * @memberof ToastService
   */
  private showToast(type: ToastType, message: string, title: string) {
    const toast: ToastI = {
      type,
      title,
      message
    };
    this.pushToastSubject.next(toast);
  }

  /**
   * @description it shows the Success toast 
   *
   * @param {string} message
   * @param {string} [title='Success']
   * @memberof ToastService
   */
  success(message: string, title: string = 'Success') {
    this.showToast(ToastType.SUCCESS, message, title);
  }

  /**
   * @description it shows the Error toast
   *
   * @param {string} message
   * @param {string} [title='Error']
   * @memberof ToastService
   */
  error(message: string, title: string = 'Error') {
    this.showToast(ToastType.ERROR, message, title);
  }

  /**
   * @description it shows the Info toast
   *
   * @param {string} message
   * @param {string} [title='Info']
   * @memberof ToastService
   */
  info(message: string, title: string = 'Info') {
    this.showToast(ToastType.INFO, message, title);
  }

  /**
   * @description it shows the Warning toast.
   *
   * @param {string} message
   * @param {string} [title='Warning']
   * @memberof ToastService
   */
  warning(message: string, title: string = 'Warning') {
    this.showToast(ToastType.WARNING, message, title);
  }

  /**
   * @description it clears all the toast from screen
   *
   * @memberof ToastService
   */
  removeAllToast() {
    this.pushToastSubject.next();
  }

}
