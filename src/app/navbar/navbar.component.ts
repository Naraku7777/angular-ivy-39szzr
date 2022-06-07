import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../services/mediator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor(
    private userService: MediatorService,
    private router: Router
  ) { }

  cerrar(){
    this.userService.logout().then(() => {
      this.router.navigate(['/Login']);
    }).catch(error => console.log(error));
  }
}