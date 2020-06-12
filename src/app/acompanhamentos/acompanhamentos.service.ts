import { Injectable } from "@angular/core";
import { Cliente } from "../models/cliente";
import { IdbService } from "../shared/indexeddb/idb.service";
import Dexie from "dexie";

@Injectable({
  providedIn: "root"
})
export class AcompanhamentosService {
  constructor(private idbService: IdbService) {
    this.clientes = idbService.table("clientes");
  }

  public clientes!: Dexie.Table<Cliente, number>;

  async adicionar(cliente: Cliente): Promise<Cliente> {
    const id = await this.clientes.add(cliente);
    cliente.id = id;
    return cliente;
  }

  async atualizar(cliente: Cliente): Promise<Cliente> {
    await this.clientes.update(cliente.id,  cliente);
    return cliente;
  }

  excluir(id: number) {
    this.clientes.delete(id);
  }

  listar(): Promise<Cliente[]> {
    return this.clientes.orderBy("nome").toArray();
  }
  async obterPorId(id: number): Promise<Cliente> {
    const cliente = await this.clientes.get(id);
    return cliente;
  }
}
