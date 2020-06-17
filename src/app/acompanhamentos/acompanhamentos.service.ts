import { Injectable } from "@angular/core";
import { Acompanhamento } from '../models/acompanhamento';
import { IdbService } from "../shared/indexeddb/idb.service";
import Dexie from "dexie";

@Injectable({
  providedIn: "root"
})
export class AcompanhamentosService {
  constructor(private idbService: IdbService) {
    this.acompanhamentos = idbService.table("acompanhamentos");
  }

  public acompanhamentos!: Dexie.Table<Acompanhamento, number>;

  async adicionar(acompanhamento: Acompanhamento): Promise<Acompanhamento> {
    const id = await this.acompanhamentos.add(acompanhamento);
    acompanhamento.id = id;
    return acompanhamento;
  }

  async atualizar(acompanhamento: Acompanhamento): Promise<Acompanhamento> {
    await this.acompanhamentos.update(acompanhamento.id, acompanhamento);
    return acompanhamento;
  }

  excluir(id: number) {
    this.acompanhamentos.delete(id);
  }

  listar(): Promise<Acompanhamento[]> {
    return this.acompanhamentos.orderBy("id").toArray();
  }
  async obterPorId(id: number): Promise<Acompanhamento> {
    const acompanhamento = await this.acompanhamentos.get(id);
    return acompanhamento;
  }
}
