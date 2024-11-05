import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { EmailEhUnicoValidator } from "./validacoes/email.eh.unicio";
import { UsuariosEntity } from "./entities/usuarios.entity";


@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailEhUnicoValidator, UsuariosEntity]
})




export class UsuariosModule{}