<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Contato extends Model
{
    public $timestamps = false;
    protected  $primaryKey = 'cod_contato';

    public function lista($cod_usuario) {
        $lista = DB::select('select * from contatos where cod_usuario = ? order by nome', [$cod_usuario]);
        return $lista;
    }

    public function inserir() {
        return $this->save();
    }

    public function excluir($id) {
        $exclui = $this->find($id);
        $exclui->delete();
        $lista = Contato::all();
        return $lista;
    }

    public function consulta($valor) {
        $row = $this->find($valor);
        return $row;
    }

    public function atualizar($id) {
        $novo = $this->find($id);
        if ($this->nome)
            $novo->nome = $this->nome;
        if ($this->email)
            $novo->email = $this->email;
        if ($this->telefone)
            $novo->telefone = $this->telefone;
        if ($this->empresa)
            $novo->empresa= $this->empresa;
        $novo->save();
    }

    public function filtro($nome) {
        $rows = DB::select("select * from contatos where nome like '{$nome}%'");
        return $rows;
    }
}
