import { Component } from '@angular/core';
import { MediatorService } from '../../services/mediator.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})

export class Page2Component{
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