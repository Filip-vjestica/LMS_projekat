import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CreateAdresaRegistrovaniKorisnikComponent } from './create-adresa-registrovani-korisnik.component';

describe('CreateAdresaRegistrovaniKorisnikComponent', () => {
  let component: CreateAdresaRegistrovaniKorisnikComponent;
  let fixture: ComponentFixture<CreateAdresaRegistrovaniKorisnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdresaRegistrovaniKorisnikComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdresaRegistrovaniKorisnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
