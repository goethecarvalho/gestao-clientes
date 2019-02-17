import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Usuario } from '../models/usuario';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class IdbService extends Dexie {
  public login!: Dexie.Table<Usuario, number>;

  constructor() {
    super("agenda");
    this.version(1).stores({
      login: "++id,nome",
      contatos: "++id,nome"
    });
  }
}
