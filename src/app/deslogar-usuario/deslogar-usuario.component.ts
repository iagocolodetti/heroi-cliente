import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deslogar-usuario',
  templateUrl: './deslogar-usuario.component.html',
  styleUrls: ['./deslogar-usuario.component.css']
})
export class DeslogarUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('heroisApiToken');
    this.router.navigateByUrl('/login');
  }

}
