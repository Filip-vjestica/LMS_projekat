import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserPermissionComponent } from './card-user-permission.component';

describe('CardUserPermissionComponent', () => {
  let component: CardUserPermissionComponent;
  let fixture: ComponentFixture<CardUserPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardUserPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
