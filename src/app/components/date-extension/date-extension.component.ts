import { Component, OnInit } from '@angular/core';

// NOTE: it adds some methods to the prototype of Date object.
import "./../../extensions/date.extensions";


@Component({
  selector: 'vs-date-extension',
  templateUrl: './date-extension.component.html',
  styleUrls: ['./date-extension.component.scss']
})
export class DateExtensionComponent implements OnInit {
  currentDate: Date;
  clonedDate: Date;

  codeSnippet1;
  codeSnippet2;
  codeSnippet3;
  codeSnippet4;
  codeSnippet5;
  codeSnippet6;
  codeSnippet7;

  constructor() { }

  ngOnInit(): void {
    this.testClone();
    this.testSetStartHours();
    this.testSetEndHours();
    this.testAddDays();
    this.testIsToday();
    this.testCompareDate();
    this.testCompareCalendar();
  }

  testClone() {
    console.log('********* clone() **********');

    this.currentDate = new Date();
    console.log('this.currentDate', this.currentDate);
    this.clonedDate = this.currentDate.clone();
    console.log('this.clonedDate', this.clonedDate)

    this.codeSnippet1 = `    this.currentDate = new Date();
    console.log(this.currentDate); => ${this.currentDate}
    this.clonedDate = this.currentDate.clone();
    console.log(this.clonedDate); => ${this.clonedDate}`;
  }

  testSetStartHours() {
    console.log('********* setStartHours() **********');

    this.currentDate = new Date();
    console.log('this.currentDate', this.currentDate);
    this.codeSnippet2 = `    this.currentDate = new Date();
    console.log(this.currentDate); => ${this.currentDate}
    `;

    this.currentDate.setStartHours();
    console.log('this.currentDate', this.currentDate);
    this.codeSnippet2 += `this.currentDate.setStartHours();
    console.log(this.currentDate); => ${this.currentDate}`;
  }

  testSetEndHours() {
    console.log('********* setEndHours() **********');

    this.currentDate = new Date();
    console.log('this.currentDate', this.currentDate);
    this.codeSnippet3 = `    this.currentDate = new Date();
    console.log(this.currentDate); => ${this.currentDate}
    `;

    this.currentDate.setEndHours();
    console.log('this.currentDate', this.currentDate);
    this.codeSnippet3 += `this.currentDate.setEndHours();
    console.log(this.currentDate); => ${this.currentDate}`;
  }

  testAddDays() {
    console.log('********* addDays() **********');

    this.currentDate = new Date();
    console.log('this.currentDate', this.currentDate);
    let newDate = this.currentDate.addDays(5);
    console.log('newDate', newDate)

    this.codeSnippet4 = `    this.currentDate = new Date();
    console.log(this.currentDate); => ${this.currentDate}
    let newDate = this.currentDate.addDays(5);
    console.log(newDate); => ${ newDate}`
  }

  testIsToday() {
    console.log('********* isToday() **********');

    this.currentDate = new Date();
    console.log('this.currentDate', this.currentDate);
    let isToday = this.currentDate.isToday();
    console.log('isToday', isToday)

    this.codeSnippet5 = `    this.currentDate = new Date();
    console.log(this.currentDate); => ${this.currentDate}
    let isToday = this.currentDate.isToday();
    console.log('isToday', isToday); => ${isToday}`;
  }

  testCompareDate() {
    console.log('********* compareDate() **********');

    this.currentDate = new Date();
    console.log('this.currentDate', this.currentDate);
    let newDate = this.currentDate.addDays(2);
    console.log('newDate', newDate);
    let compareResult = this.currentDate.compareDate(newDate);
    console.log('compareResult', compareResult);

    this.codeSnippet6 = `    this.currentDate = new Date();
    console.log(this.currentDate); => ${this.currentDate}
    let newDate = this.currentDate.addDays(2);
    console.log('newDate', newDate); => ${newDate}
    let compareResult = this.currentDate.compareDate(newDate);
    console.log('compareResult', compareResult); => ${compareResult}
    `;
  }

  testCompareCalendar() {
    console.log('********* compareCalendar() **********');

    this.currentDate = new Date();
    console.log('this.currentDate', this.currentDate);
    let newDate = this.currentDate.addDays(5);
    newDate.setStartHours();
    console.log('newDate', newDate);
    let compareResult = this.currentDate.compareCalendar(newDate);
    console.log('compareResult', compareResult);

    this.codeSnippet7 = `    this.currentDate = new Date();
    console.log(this.currentDate); => ${this.currentDate}
    let newDate = this.currentDate.addDays(2);
    console.log('newDate', newDate); => ${newDate}
    let compareResult = this.currentDate.compareDate(newDate);
    console.log('compareResult', compareResult); => ${compareResult}
    `;
  }

}
