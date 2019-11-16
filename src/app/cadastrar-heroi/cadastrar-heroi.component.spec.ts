import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UniversoService } from '../service/universo.service';
import { RouterTestingModule } from '@angular/router/testing';

import { CadastrarHeroiComponent } from './cadastrar-heroi.component';

describe('CadastrarHeroiComponent', () => {
  let component: CadastrarHeroiComponent;
  let fixture: ComponentFixture<CadastrarHeroiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarHeroiComponent ],
      imports: [ FormsModule, HttpClientTestingModule, RouterTestingModule ],
      providers: [ UniversoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarHeroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
