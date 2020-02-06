import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  titulo : string;
  subtitulo: string;
  conectado: boolean;
  usuario: string;
  constructor() {

  }

  public showTitulo:(titulo: string, subtitulo: string)=>void;
  public showUsuario:(usuario:string)=>void;
}
