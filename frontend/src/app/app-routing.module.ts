import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ContatoComponent} from './contato/contato.component';
import { RegistroComponent } from './registro/registro.component';
import { FormcontatoComponent } from './formcontato/formcontato.component';
import {Error404Component} from "./error404/error404.component";
import {PerfilComponent} from "./perfil/perfil.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'formcontato/:cod', component: FormcontatoComponent},
  {path: 'formcontato', component: FormcontatoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'contato', component: ContatoComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: Error404Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
