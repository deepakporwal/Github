import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearndesignComponent } from './learndesign.component';

describe('LearndesignComponent', () => {
  let component: LearndesignComponent;
  let fixture: ComponentFixture<LearndesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearndesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearndesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
