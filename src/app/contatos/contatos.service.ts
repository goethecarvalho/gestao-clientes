import { Injectable } from "@angular/core";
import { Contato } from "../models/contato";
import { IdbService } from "../shared/idb.service";
import Dexie from "dexie";

@Injectable({
  providedIn: "root"
})
export class ContatosService {
  constructor(private idbService: IdbService) {
    this.contatos = idbService.table("contatos");
  }

  public contatos!: Dexie.Table<Contato, number>;

  async adicionar(contato: Contato): Promise<Contato> {
    const id = await this.contatos.add(contato);
    contato.id = id;
    return contato;
  }

  async atualizar(contato: Contato): Promise<Contato> {
    await this.contatos.update(contato.id,contato);
    return contato;
  }

  excluir(id: number) {
    this.contatos.delete(id);
  }

  listar(): Promise<Contato[]> {
    return this.contatos.orderBy("nome").toArray();
  }
  async obterPorId(id: number): Promise<Contato> {
    const contato=await this.contatos.get(id);
    return contato;
  }
}
