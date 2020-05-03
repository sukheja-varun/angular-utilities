import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateExtensionComponent } from './date-extension.component';

describe('DateExtensionComponent', () => {
  let component: DateExtensionComponent;
  let fixture: ComponentFixture<DateExtensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateExtensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
