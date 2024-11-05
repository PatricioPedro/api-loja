import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuariosEntity {

    id: string;
    nome: string;
    senha: string;
    email: string;

}