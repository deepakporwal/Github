import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnJsTsComponent } from './learn-js-ts.component';

describe('LearnJsTsComponent', () => {
  let component: LearnJsTsComponent;
  let fixture: ComponentFixture<LearnJsTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnJsTsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnJsTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
