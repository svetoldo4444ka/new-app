/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppTasksListComponent } from './app-tasks-list.component';

describe('AppTasksListComponent', () => {
  let component: AppTasksListComponent;
  let fixture: ComponentFixture<AppTasksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTasksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
