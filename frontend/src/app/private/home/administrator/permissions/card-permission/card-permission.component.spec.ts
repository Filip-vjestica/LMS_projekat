import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPermissionComponent } from './card-permission.component';

describe('CardPermissionComponent', () => {
  let component: CardPermissionComponent;
  let fixture: ComponentFixture<CardPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
