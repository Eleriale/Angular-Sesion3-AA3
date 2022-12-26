import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aa3Component } from './aa3.component';

describe('Aa3Component', () => {
  let component: Aa3Component;
  let fixture: ComponentFixture<Aa3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aa3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
