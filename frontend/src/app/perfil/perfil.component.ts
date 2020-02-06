import { Component, OnInit } from '@angular/core';
import {SessaoService} from "../sessao.service";
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {MensagemService} from "../mensagem.service";;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  logado : any;

  usuario = {
    nome : null,
    email: null,
    senha: null
  }

  constructor(
    private sessao: SessaoService,
    private http: HttpClient,
    private r: Router,
    private msg: MensagemService) { }

  ngOnInit() {
    this.msg.showTitulo("Perfil", "perfil do usuário");
    this.logado = this.sessao.verificausuario();

    this.usuario.nome = this.logado.nome;
    this.usuario.email = this.logado.email;
    this.usuario.senha = this.logado.senha;

  }

  atualizar() {
    let dados = {
      nome: this.usuario.nome,
      email: this.usuario.email,
      senha: this.usuario.senha,
      cod_usuario: this.logado.cod_usuario,
      acao: "atualizar"
    }

    this.http.post('http://desafioeg/usuario',  JSON.stringify(dados)).subscribe(data => {
      alert('atualizado com sucesso');
      this.r.navigateByUrl("/contato");
    });
  }
}
