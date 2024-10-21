import { Controller, Post, Body, Get } from "@nestjs/common";
import { ProdutosRepository } from "./produtos.repository";

@Controller('/produtos')

export class ProdutosController {

    constructor(private produtosRepository: ProdutosRepository) { }
    @Post()
    salvarProdutos(@Body() dados) {
        return this.produtosRepository.salvar(dados);
    }

    @Get()
    listarProdutos() {
        return this.produtosRepository.listar();
    }
}