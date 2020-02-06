import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {Usuario} from "../usuario.model";
import {MensagemService} from "../mensagem.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  usuario : Usuario = {
    nome: null,
    email: null,
    senha: null
  };

  constructor(private http: HttpClient, private r : Router, private msg: MensagemService) { }

  public login() {
    let dados = {
      email: this.usuario.email,
      senha: this.usuario.senha,
      acao: "login"
    }
    this.http.post<Usuario>('http://desafioeg/usuario',  JSON.stringify(dados)).subscribe(data => {
      localStorage.setItem("usuario", JSON.stringify(data));
      if (typeof(data.email) != 'undefined')
        this.r.navigateByUrl("/contato");
    });
  }

  ngOnInit() {
    this.msg.showTitulo("Login", "Faça seu login ou registre-se");
    localStorage.setItem("titulo", "Login");
  }

}
