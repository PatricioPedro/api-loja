

import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';
import { Injectable } from '@nestjs/common';


@Injectable()
@ValidatorConstraint({async: true})
export class EmailEhUnicoValidator implements ValidatorConstraintInterface {

    constructor(private usuarioRepository: UsuarioRepository){}
    async validate(value: string, validationArguments?: ValidationArguments): Promise<boolean>{
        
        const ehEmailUnico = await this.usuarioRepository.comEmail(value);
        return !ehEmailUnico;
    }  
}


export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
      registerDecorator({
        target: objeto.constructor,
        propertyName: propriedade,
        options: opcoesDeValidacao,
        constraints: [],
        validator: EmailEhUnicoValidator,
      });
    };
  };
  