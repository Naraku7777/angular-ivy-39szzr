import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn : 'root'
})

export class BasedatosService {
  constructor ( public Firestore: AngularFirestore) {} 

  ngOnInit(){

  }
  createDocument <tipo>(data: tipo, enlace: string ){
    const empleoCollection: AngularFirestoreCollection<tipo> =
                          this.Firestore.collection<tipo>(enlace);
    return empleoCollection.add(data);
  }
}

