/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FresherregisterationComponent } from './fresherregisteration.component';

describe('FresherregisterationComponent', () => {
  let component: FresherregisterationComponent;
  let fixture: ComponentFixture<FresherregisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FresherregisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FresherregisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
