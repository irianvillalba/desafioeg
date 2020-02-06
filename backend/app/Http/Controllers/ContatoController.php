<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Contato;

class ContatoController extends Controller
{
    public function principal() {
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);
        $contato = new Contato();
        $retorno = null;

        switch($request->acao) {
            case 'listar':
                $retorno = $contato->lista($request->cod_usuario);
                break;
            case 'cadastrar':
                $contato->nome = $request->nome;
                $contato->email = $request->email;
                $contato->telefone = $request->telefone;
                $contato->empresa = $request->empresa;
                $contato->cod_usuario = $request->cod_usuario;
                $contato->inserir();
                $retorno = "inserir";
                break;
            case 'consultar':
                $retorno = $contato->consulta($request->cod_contato);
                break;
            case 'excluir':
                $contato->excluir($request->cod_contato);
                $retorno = $contato->lista($request->cod_usuario);
                break;
            case 'atualizar':
                $contato->nome = $request->nome;
                $contato->email = $request->email;
                $contato->telefone = $request->telefone;
                $contato->empresa = $request->empresa;
                $contato->atualizar($request->cod_contato);
                $retorno = "atualizar";
                break;
            case 'filtro':
                $retorno = $contato->filtro($request->nome);
                break;
        }
        return json_encode($retorno);
    }
}
