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
    console.log(this.usuario);
    const{email, password} = this.usuario;
    this.authService.registrar(email, password).then(res => {
      console.log("se registro: ", res);
    })
  }
}