import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class MediatorService {
  private Firestore: AngularFirestore
  public async createDocument (data, enlace){
      this.Firestore.collection(enlace).add(data);
  }
}