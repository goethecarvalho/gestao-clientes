import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatListModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { AcompanhamentosComponent } from './acompanhamentos.component';
import { AcompanhamentosRoutingModule } from './acompanhamentos-routing.module';

@NgModule({
  declarations: [ AcompanhamentosComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatListModule,
    AcompanhamentosRoutingModule
  ]
})
export class AcompanhamentosModule { }
