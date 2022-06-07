import { Component, OnInit } from '@angular/core';
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
  
  constructor(private authService: MediatorService){}
  
  Ingresar(){
    const{email, password} = this.usuario;
    this.authService.registrar(email, password).then(res => {
      console.log("se registro: ", res);
    })
  }

  login(){
    const{email, password} = this.usuario;
    this.authService.login(email, password).then(res => {
      console.log("se registro: ", res);
    })
  }

  IngresarGoogle(){
    const{email, password} = this.usuario;
    this.authService.loginwithGoogle(email, password).then(res => {
      console.log("se registro: ", res);
    })
  }
}