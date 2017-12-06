/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppTasksControllerComponent } from './app-tasks-controller.component';

describe('AppTasksControllerComponent', () => {
  let component: AppTasksControllerComponent;
  let fixture: ComponentFixture<AppTasksControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTasksControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTasksControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
