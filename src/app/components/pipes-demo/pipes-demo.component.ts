import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vs-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.scss']
})
export class PipesDemoComponent implements OnInit {
  camelCaseString='thisIsAString';
  replaceCharString='this_is_a_string';

  constructor() { }

  ngOnInit(): void {
  }

}
