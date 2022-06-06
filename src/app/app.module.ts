import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AppMaterialModule } from './shared/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

import { Page1Component } from './Pages/page1/page1.component';
import { Page2Component } from './Pages/page2/page2.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environments';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppMaterialModule, FlexLayoutModule, AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
  
  declarations: [ AppComponent, HelloComponent, NavbarComponent, Page1Component, Page2Component],
  
  providers: [],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

