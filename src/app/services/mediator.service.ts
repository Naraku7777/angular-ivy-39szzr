import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})

export class MediatorService {
  constructor(private fire: AngularFireAuth){ }

  async loginwithGoogle(email: string, password: string){
    try{
      return await this.fire.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch(err){
      console.log("error en login con Google", err);
      return null;
    }
  }

  async registrar(email: string, password: string){
    try{
      return await this.fire.createUserWithEmailAndPassword(email, password);
    } catch(err){
      console.log("error en login", err);
      return null;
    }
  }
  
  async login(email: string, password: string){
    try{
      return await this.fire.signInWithEmailAndPassword(email, password);
    } catch(err){
      console.log("error en login", err);
      return null;
    }
  }
}