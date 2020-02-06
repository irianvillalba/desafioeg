import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormcontatoComponent } from './formcontato/formcontato.component';
import { ContatoComponent } from './contato/contato.component';
import { Error404Component } from './error404/error404.component';
import { PerfilComponent } from './perfil/perfil.component';
import {MensagemService} from "./mensagem.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    FormcontatoComponent,
    ContatoComponent,
    Error404Component,
    PerfilComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
