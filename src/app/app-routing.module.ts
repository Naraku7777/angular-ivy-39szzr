import { NgModule } from '@angular/core';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';

import { Page1Component } from './Pages/page1/page1.component';
import { Page2Component } from './Pages/page2/page2.component';


const routes: Routes = [
  { path: '', redirectTo: '/page1', pathMatch: 'full'},
  
  {path: 'Login', component: LoginComponent},

  { path: 'page1', component: Page1Component, ...canActivate(() => redirectUnauthorizedTo(['/Login'])) },
  { path: 'page2', component: Page2Component, ...canActivate(() => redirectUnauthorizedTo(['/Login']))}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }