import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'angular-utilities';

  constructor() { }

  ngOnInit(): void {
  }

}
