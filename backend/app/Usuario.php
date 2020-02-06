<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Usuario extends Model
{
    public $timestamps = false;
    protected  $primaryKey = 'cod_usuario';

    public function lista() {
        $lista = Usuario::all();
        return $lista;
    }

    public function inserir() {
        return $this->save();
    }

    public function excluir($id) {
        $exclui = $this->find($id);
        $exclui->delete();
    }

    public function consulta($email)
    {
        $row = DB::select("select * from usuarios where email = '{$email}'");
        return $row;
    }

    public function login($email, $senha) {
        $resposta = false;
        if (isset($email) && isset($senha)) {
            $row = DB::select('select * from usuarios where email = ? and senha = ?', [$email, $senha]);
            if (!empty($row)) {
                $resposta = $row[0];
            }
        }
        return $resposta;
    }

    public function atualizar($id) {
        $novo = $this->find($id);
        if ($this->nome)
            $novo->nome = $this->nome;
        if ($this->email)
            $novo->email = $this->email;
        if ($this->senha)
            $novo->senha = $this->senha;
        $novo->save();
    }

}
