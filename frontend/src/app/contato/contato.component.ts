import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {SessaoService} from "../sessao.service";
import {MensagemService} from "../mensagem.service";

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  contatos : any;
  displayedColumns: string[] = ['nome', 'email', 'telefone', 'empresa', 'cod_contato'];
  filtro: string;
  usuario: any;
  constructor(
    private http: HttpClient,
    private r : Router,
    private sessao: SessaoService,
    private msg: MensagemService) { }

  ngOnInit() {
    this.msg.showTitulo("Contatos", "Lista de todos os contatos cadastrados");
    this.usuario = this.sessao.verificausuario();
    this.msg.showUsuario(this.usuario.nome);
    if (this.usuario) {
      let dados = {
        cod_usuario: this.usuario.cod_usuario,
        acao: "listar"
      }
      this.http.post('http://desafioeg/contato',  JSON.stringify(dados)).subscribe(data => {
        this.contatos = data;
      });
    }

  }

  excluir(cod_contato: any) {

    let dados = {
      cod_contato: cod_contato,
      cod_usuario: this.usuario.cod_usuario,
      acao: "excluir"
    }

    if (confirm("Deseja realmente excluir esse contato?"))
      this.http.post('http://desafioeg/contato',  JSON.stringify(dados)).subscribe(data => {
        this.contatos = data;
      });
  }

  editar(cod_contato: any) {
    this.r.navigateByUrl("/formcontato/" + cod_contato);
  }

  filtrar() {

    let dados = {
      nome: this.filtro,
      acao: "filtro"
    }

    this.http.post('http://desafioeg/contato',  JSON.stringify(dados)).subscribe(data => {
      this.contatos = data;
    });

  }
}
