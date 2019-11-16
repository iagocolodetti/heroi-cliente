import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioService } from '../service/usuario.service';
import { RouterTestingModule } from '@angular/router/testing';

import { LogarUsuarioComponent } from './logar-usuario.component';

describe('LogarUsuarioComponent', () => {
  let component: LogarUsuarioComponent;
  let fixture: ComponentFixture<LogarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogarUsuarioComponent ],
      imports: [ FormsModule, HttpClientTestingModule, RouterTestingModule ],
      providers: [ UsuarioService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
