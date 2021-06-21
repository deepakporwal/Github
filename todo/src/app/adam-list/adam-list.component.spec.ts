/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdamListComponent } from './adam-list.component';

describe('AdamListComponent', () => {
  let component: AdamListComponent;
  let fixture: ComponentFixture<AdamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
