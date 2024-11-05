import { Controller, Post, Body, Get } from "@nestjs/common";
import { ProdutosRepository } from "./produtos.repository";
import { CriarProdutoDTO } from "./dto/produtos.create.dto";

@Controller('/produtos')

export class ProdutosController {

    constructor(private produtosRepository: ProdutosRepository) { }
    @Post()
    salvarProdutos(@Body() dados:CriarProdutoDTO) {
        return this.produtosRepository.salvar(dados);
    }

    @Get()
    listarProdutos() {
        return this.produtosRepository.listar();
    }
}