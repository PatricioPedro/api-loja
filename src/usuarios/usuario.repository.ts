import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {

    usuarios = [];

    async criarUsuario(dados) {
        this.usuarios.push(dados)
        console.log(this.usuarios)
    }

    async listar() {
        return this.usuarios;
    }

}