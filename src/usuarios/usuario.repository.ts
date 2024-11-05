import { Injectable } from "@nestjs/common";
import { UsuariosEntity } from "./entities/usuarios.entity";

@Injectable()
export class UsuarioRepository {

    usuarios: UsuariosEntity[] = [];

    async criarUsuario(dados: UsuariosEntity) {
        this.usuarios.push(dados)
        console.log(this.usuarios)
    }

    async listar(): Promise<UsuariosEntity[]> {
        return this.usuarios;
    }

    async comEmail(email: string) {
        return this.usuarios.find((e) => email === email);
    }



    async atualiza(id: string, dadosDeAtualizacao: Partial<UsuariosEntity>) {

        const possivelUsuario = this.usuarios.find((usuario: UsuariosEntity) => usuario.id === id);

        if (!possivelUsuario) {
            throw new Error('Usuario nao encontrado');
        }

        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {

            if (chave === 'id') {
                return;
            }

            possivelUsuario[chave] = valor;

        });


        return possivelUsuario;

    }

}