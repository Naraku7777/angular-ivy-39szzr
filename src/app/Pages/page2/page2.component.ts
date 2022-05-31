import { Component, OnInit } from '@angular/core';
import { N_empleo } from '../../models/interfaces';
import { BasedatosService } from '../../services/basedatos.service';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})

export class Page2Component{
  
  N_empleo = {
    nombreEmpleo: '',
    nombreUsuario: '',
    email: '',
    descripcion: ''
  };

  public database: BasedatosService

  save() {
    const data = this.N_empleo;
    const enlace = 'NuevoEmpleo';
    this.database.createDocument<N_empleo>(data, enlace)
  }
}