import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  constructor(private r : Router) { }

  public verificausuario() {
    let usuario  = JSON.parse(localStorage.getItem('usuario'));
    if (usuario)
      console.log("logado");
    else
      this.r.navigateByUrl("/login");

    return usuario;
  }
}
