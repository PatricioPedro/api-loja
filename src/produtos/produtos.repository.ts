import { Injectable } from "@nestjs/common";


@Injectable()

export class ProdutosRepository {

    produtos = [];
    salvar(dados) {
        console.log(dados)
        return this.produtos.push(dados);

    }

    listar() {
        return this.produtos;
    }
}