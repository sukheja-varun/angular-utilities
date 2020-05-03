import { Component, OnInit } from '@angular/core';

import { ToastService } from '@service/toast.service';

@Component({
  selector: 'vs-toast-demo',
  templateUrl: './toast-demo.component.html',
  styleUrls: ['./toast-demo.component.scss']
})
export class ToastDemoComponent implements OnInit {

  constructor(private _toast: ToastService) { }

  ngOnInit(): void {
  }

  onSuccessToast() {
    this._toast.success('This is success toast');
  }

  onErrorToast() {
    this._toast.error('This is error toast');
  }

  onInfoToast() {
    this._toast.info('This is info toast');
  }

  onWarningToast() {
    this._toast.warning('This is warning toast');
  }
}
