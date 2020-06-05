import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class IdbService extends Dexie {

  constructor() {
    super("core");
    this.version(1).stores({
      login: "++id,nome",
      clientes: "++id,nome"
    });
  }
}
