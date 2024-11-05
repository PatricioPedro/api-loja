import { Body, Controller, Post, Get, Put, Param } from '@nestjs/common';
import { UsuarioRepository } from "./usuario.repository";
import { CriarUsuariosDTO } from "./criar.usuarios.dto";
import { UsuariosEntity } from "./entities/usuarios.entity";
import { v4 as uuid } from 'uuid';
import { ListarUsuarioDTO } from "./listar.usuario.dto";
import { AtualizaUsuariosDTO } from './atualiza.usuarios.dto';

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuariosRepository: UsuarioRepository, private usuarioEntity: UsuariosEntity) { }
    @Post()
    criarUsuario(@Body() dadosUsuarios: CriarUsuariosDTO) {
        this.usuarioEntity.email = dadosUsuarios.email;
        this.usuarioEntity.senha = dadosUsuarios.senha;
        this.usuarioEntity.nome = dadosUsuarios.nome;
        this.usuarioEntity.id = uuid();

        this.usuariosRepository.criarUsuario(this.usuarioEntity);

        return {
            id: this.usuarioEntity.id,
            message: 'Usuario criado com sucesso!'
        };

    }

    @Get()
    async listarUsuarios() {
        const usuariosSalvos = await this.usuariosRepository.listar();
        return usuariosSalvos.map((user) => new ListarUsuarioDTO(user.nome, user.id))
    }

    @Put('/:id')
    async atualizatUsuario(@Param('id') id: string, @Body() dadosUsuarios: AtualizaUsuariosDTO) {

        const usuario = await this.usuariosRepository.atualiza(id, dadosUsuarios);
        return usuario;

    }
}