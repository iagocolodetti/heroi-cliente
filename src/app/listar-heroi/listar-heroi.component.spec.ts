import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHeroiComponent } from './listar-heroi.component';

describe('ListarHeroiComponent', () => {
  let component: ListarHeroiComponent;
  let fixture: ComponentFixture<ListarHeroiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarHeroiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHeroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
