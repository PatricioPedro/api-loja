import { Type } from "class-transformer";
import { CaracteristicasProdutoDTO } from "./caracteristicas.produto.dto";
import { ImagensProdutoDTO } from "./imagens.produto.dto";
import { IsArray, IsNotEmpty, IsNumber, ValidateNested} from 'class-validator';


export class CriarProdutoDTO {


    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    valor: string;

    @IsNumber()
    quantidadeDisponivel: number;

    @ValidateNested()
    @IsArray()
    @Type(() => CaracteristicasProdutoDTO)
    caracteristicas: CaracteristicasProdutoDTO[];

    @IsNotEmpty()
    descricao: string;

    @ValidateNested()
    @IsArray()
    @Type(() => ImagensProdutoDTO)
    imagens: ImagensProdutoDTO[];

    @IsNotEmpty()
    categoria: string;
    
    @IsNotEmpty()
    dataCriacao: string;

    @IsNotEmpty()
    dataAtualizacao: string;

}