import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { filter, map } from 'rxjs/operators';

import { Mensaje } from '../Interface/mesaje.interface'
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];

  constructor(private afs: AngularFirestore) {
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats');
    return this.itemsCollection.valueChanges().pipe(
      map(
        (mensajes: Mensaje[]) => {
          console.log('mensajes');
          console.log(mensajes)
          this.chats = mensajes
          console.log(this.chats, 'chat cargado');
          
        }
      )
    )
  }
}
