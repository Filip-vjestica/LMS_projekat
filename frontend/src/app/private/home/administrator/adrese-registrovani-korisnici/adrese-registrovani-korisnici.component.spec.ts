import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdreseRegistrovaniKorisniciComponent } from './adrese-registrovani-korisnici.component';

describe('AdreseRegistrovaniKorisniciComponent', () => {
  let component: AdreseRegistrovaniKorisniciComponent;
  let fixture: ComponentFixture<AdreseRegistrovaniKorisniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdreseRegistrovaniKorisniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdreseRegistrovaniKorisniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
