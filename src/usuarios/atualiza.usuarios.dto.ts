
import { IsEmail, IsNotEmpty, IsOptional, Matches, MinLength } from 'class-validator';
import { EmailEhUnico } from './validacoes/email.eh.unicio';

export class AtualizaUsuariosDTO {

    @IsOptional()
    @IsNotEmpty({message: 'O nome Nao deve ser vazio'})
    @MinLength(5, {message: 'O nome deve ter no minimo 5 letras'})
    nome: string;

    @IsOptional()
    @MinLength(8, {message: 'A senha deve ter no minimo 8 letras'})
    @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: 'A senha deve conter letras, números e caracteres especiais.',
      })
    senha: string;

    @IsOptional()
    @IsEmail(undefined, {message: 'O email nao eh valido'})
    @EmailEhUnico({message: 'O email ja existe tenta outro email!'})
    email: string;

}