import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  mensaje:string = "";

  constructor( public _cs: ChatService) { 

    this._cs.cargarMensajes().subscribe()
  }

  ngOnInit(): void {
  }

  enviar_mensaje(){
    console.log(this.mensaje);
    console.log(this.mensaje);
  }

}
