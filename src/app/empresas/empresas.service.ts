import { Injectable } from "@angular/core";
import { Empresa } from "../models/empresa";
import { IdbService } from "../shared/indexeddb/idb.service";
import Dexie from "dexie";

@Injectable({
  providedIn: "root"
})
export class EmpresasService {
  constructor(private idbService: IdbService) {
    this.empresas = idbService.table("empresas");
  }

  public empresas!: Dexie.Table<Empresa, number>;

  async adicionar(empresa: Empresa): Promise<Empresa> {
    const id = await this.empresas.add(empresa);
    empresa.id = id;
    return empresa;
  }

  async atualizar(empresa: Empresa): Promise<Empresa> {
    await this.empresas.update(empresa.id,  empresa);
    return empresa;
  }

  excluir(id: number) {
    this.empresas.delete(id);
  }

  listar(): Promise<Empresa[]> {
    return this.empresas.orderBy("nome").toArray();
  }
  async obterPorId(id: number): Promise<Empresa> {
    const empresa = await this.empresas.get(id);
    return empresa;
  }
}
