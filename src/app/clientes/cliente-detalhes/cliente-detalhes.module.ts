import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteDetalhesRoutingModule } from './cliente-detalhes-routing.module';
import { ClienteDetalhesComponent } from './cliente-detalhes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ClienteDetalhesComponent],
  imports: [
    CommonModule,
    ClienteDetalhesRoutingModule,
    SharedModule
  ]
})
export class ClienteDetalhesModule { }
