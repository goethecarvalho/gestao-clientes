import { Injectable } from "@angular/core";
import { Produto } from "../models/produto";
import { IdbService } from "../shared/indexeddb/idb.service";
import Dexie from "dexie";

@Injectable({
  providedIn: "root"
})
export class ProdutosService {
  constructor(private idbService: IdbService) {
    this.produtos = idbService.table("produtos");
  }

  public produtos!: Dexie.Table<Produto, number>;

  async adicionar(produto: Produto): Promise<Produto> {
    const id = await this.produtos.add(produto);
    produto.id = id;
    return produto;
  }

  async atualizar(produto: Produto): Promise<Produto> {
    await this.produtos.update(produto.id,  produto);
    return produto;
  }

  excluir(id: number) {
    this.produtos.delete(id);
  }

  listar(): Promise<Produto[]> {
    return this.produtos.orderBy("id").toArray();
  }

  async obterPorId(id: number): Promise<Produto> {
    const produto = await this.produtos.get(id);
    return produto;
  }
}
