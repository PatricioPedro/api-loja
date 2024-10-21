import { Body, Controller, Post, Get } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";


@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuariosRepository: UsuarioRepository){}
    @Post()
    criarUsuario(@Body() dadosUsuarios) {

        this.usuariosRepository.criarUsuario(dadosUsuarios)

        return dadosUsuarios;

    }

    @Get()
    listarUsuarios() {
        return this.usuariosRepository.listar();
    }
}