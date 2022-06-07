import { Component } from '@angular/core';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})

export class Page2Component{
  trabajo = {
    email: "",
    Nombre_Trabajo: "",
    Empresa_Solicita: "",
    Fecha: "",
    Periodo: "",
    Perfil: "",
    Descripcion: ""
  }
  save(){
    
  }
}