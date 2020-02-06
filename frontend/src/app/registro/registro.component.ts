import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {MensagemService} from "../mensagem.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario = {
    nome : "",
    email: "",
    senha: ""
  }

  constructor(
    private http: HttpClient,
    private r: Router,
    private msg: MensagemService) { }

  ngOnInit() {
    this.msg.showTitulo("Registro", "entre com seus dados para registrar como usuário");
    localStorage.setItem("titulo", "Registro");
  }

  public  cadastrar() {
    let dados = {
      nome: this.usuario.nome,
      email: this.usuario.email,
      senha: this.usuario.senha,
      acao: "cadastrar"
    }

    this.http.post('http://desafioeg/usuario',  JSON.stringify(dados)).subscribe(data => {
      if (data == 'existe')
        alert('esse email já está cadastrado registre-se com outro email');
      else
        alert("cadastrado efetuado com sucesso, acesse com seu email e senha cadastrados");
      this.r.navigateByUrl("/login");
    });
  }

}
