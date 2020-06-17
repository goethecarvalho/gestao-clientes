import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class IdbService extends Dexie {

  constructor() {
    super("gestao-clientes");
    this.version(1).stores({
      login: "++id,nome",
      empresas: "++id,nome",
      acompanhamentos: "++id,nome"
    });
  }
}
