import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Indicacao } from 'src/app/models/indicacao';
import { Empresa } from 'src/app/models/empresa';
import { MeioContato } from 'src/app/models/meiocontato';

@Injectable()
export class DropdownService {
  constructor(private http: HttpClient) {}

  getEmpresas() {
    return this.http.get<Empresa[]>('assets/dados/empresa.json');
  }

  getIndicacoes() {
    return this.http.get<Indicacao[]>('assets/dados/indicacao.json');
  }

  getMeiosContato() {
    return this.http.get<MeioContato[]>('assets/dados/meiocontato.json');
  }
}
