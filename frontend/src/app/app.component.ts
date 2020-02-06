import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MensagemService} from "./mensagem.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  titulo : string = "Abrindo app";
  subtitulo: string = "subtitulo"
  constructor(private r : Router, private msg: MensagemService) {

  }

  ngOnInit() {
    this.msg.showTitulo = (titulo, subtitulo)=>{this.titulo = titulo; this.subtitulo = subtitulo}
  }

  sair() {
    localStorage.setItem("usuario", null);
    this.r.navigateByUrl("/login");
  }
}
