import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { EditNastavnikNaRealizacijiComponent } from './edit-nastavnik-na-realizaciji.component';

describe('EditNastavnikNaRealizacijiComponent', () => {
  let component: EditNastavnikNaRealizacijiComponent;
  let fixture: ComponentFixture<EditNastavnikNaRealizacijiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNastavnikNaRealizacijiComponent ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNastavnikNaRealizacijiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
