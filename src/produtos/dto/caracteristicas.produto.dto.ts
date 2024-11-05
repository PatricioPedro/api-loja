import { IsNotEmpty, MaxLength } from 'class-validator';


export class CaracteristicasProdutoDTO {

      @IsNotEmpty()
      nome: string;
    
      @MaxLength(20)
      descricao: string;

}