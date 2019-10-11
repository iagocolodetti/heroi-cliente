import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroiService } from '../service/heroi.service';

import { ListarHeroiComponent } from './listar-heroi.component';

describe('ListarHeroiComponent', () => {
  let component: ListarHeroiComponent;
  let fixture: ComponentFixture<ListarHeroiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarHeroiComponent ],
      imports: [ FormsModule, HttpClientTestingModule ],
      providers: [ HeroiService ]
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
