import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../../services/mediator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  usuario = {
    email: "",
    password: ""
  }
  
  constructor(
    private authService: MediatorService,
    private router: Router
    ){}
  
  Ingresar(){
    const{email, password} = this.usuario;
    this.authService.registrar(email, password).then(res => {
      console.log("se registro: ", res);
    })
  }

  login(){
    const{email, password} = this.usuario;
    this.authService.login(email, password).then(() => {
      this.router.navigate(['/page1']);
    })
  }

  IngresarGoogle(){
    const{email, password} = this.usuario;
    this.authService.loginwithGoogle(email, password).then(() => {
      this.router.navigate(['/page1']);
    })
  }
}