import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoDetalhesRoutingModule } from './produto-detalhes-routing.module';
import { ProdutoDetalhesComponent } from './produto-detalhes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProdutoDetalhesComponent],
  imports: [
    CommonModule,
    ProdutoDetalhesRoutingModule,
    SharedModule
  ]
})
export class ProdutoDetalhesModule { }
