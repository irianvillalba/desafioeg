import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from "@angular/router";
import {SessaoService} from "../sessao.service";
import {Contato} from "../contato.model";
import {MensagemService} from "../mensagem.service";

@Component({
  selector: 'app-formcontato',
  templateUrl: './formcontato.component.html',
  styleUrls: ['./formcontato.component.css']
})
export class FormcontatoComponent implements OnInit {

  contato : Contato = {
    nome:     null,
    email:    null,
    telefone: null,
    empresa:  null,
    cod_contato: null
  };

  usuario: any;

  constructor(
    private http: HttpClient,
    private r : ActivatedRoute,
    private rota : Router,
    private sessao: SessaoService,
    private msg: MensagemService) { }

  ngOnInit() {
    this.msg.showTitulo("Novo Contato", "entre com os dados para cadastrar um novo contato");
    this.usuario = this.sessao.verificausuario();
    if (this.r.snapshot.paramMap.get('cod')) {
      let dados = {
        cod_contato: this.r.snapshot.paramMap.get('cod'),
        acao: "consultar"
      }
      this.http.post<Contato>('http://desafioeg/contato',  JSON.stringify(dados)).subscribe(data => {
        this.contato.nome = data.nome;
        this.contato.email = data.email;
        this.contato.telefone = data.telefone;
        this.contato.empresa = data.empresa;
      });
    }

  }

  cadastrar() {
    let acao;

    if (this.r.snapshot.paramMap.get('cod'))
      acao = "atualizar";
    else
      acao = "cadastrar";

    let dados = {
      nome: this.contato.nome,
      email: this.contato.email,
      telefone: this.contato.telefone,
      empresa: this.contato.empresa,
      cod_contato: this.r.snapshot.paramMap.get('cod'),
      cod_usuario: this.usuario.cod_usuario,
      acao: acao
    }

    this.http.post('http://desafioeg/contato',  JSON.stringify(dados)).subscribe(data => {
      this.rota.navigateByUrl("/contato");
    });
  }
}
