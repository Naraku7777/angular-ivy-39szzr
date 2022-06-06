import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface Item {
  nombreEmpleo: string
};

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})

export class Page2Component{
  public itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore){
      this.itemsCollection = afs.collection<Item>('items');
      this.items = this.itemsCollection.valueChanges();
  }
  save(item: Item) {
      this.itemsCollection.add(item);
  }
}