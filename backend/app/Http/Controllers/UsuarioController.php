<?php

namespace App\Http\Controllers;

use App\Usuario;

class UsuarioController extends Controller
{
    public function principal() {
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);
        $usuario = new Usuario();
        $retorno = null;

        switch($request->acao) {
            case 'listar':
                $retorno = $usuario->lista();
                break;
            case 'cadastrar':
                $existe = $usuario->consulta($request->email);
                if (count($existe) == 0) {
                    $usuario->nome = $request->nome;
                    $usuario->email = $request->email;
                    $usuario->token = md5($request->email);
                    $usuario->senha = $request->senha;
                    $usuario->inserir();
                    $retorno = "cadastrado";
                } else
                    $retorno = "existe";

                break;
            case 'login':
                    $retorno = $usuario->login($request->email, $request->senha);
                break;
            case 'atualizar':
                $usuario->nome = $request->nome;
                $usuario->email = $request->email;
                $usuario->senha = $request->senha;
                $usuario->atualizar($request->cod_usuario);

                $retorno = "atualizar";
                break;
        }
        return json_encode($retorno);
    }
}
