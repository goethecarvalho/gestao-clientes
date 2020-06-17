import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AcompanhamentosRoutingModule } from "./acompanhamentos-routing.module";
import { AcompanhamentosComponent } from "./acompanhamentos.component";
import { SharedModule } from "../shared/shared.module";
import { MatTableModule, MatListModule, MatSelectModule } from "@angular/material";
import { AcompanhamentoDialogComponent } from './acompanhamento-dialog/acompanhamento-dialog.component';

@NgModule({
  declarations: [
    AcompanhamentosComponent, 
    AcompanhamentoDialogComponent
  ],
  imports: [
    CommonModule, 
    AcompanhamentosRoutingModule, 
    SharedModule, 
    MatTableModule, 
    MatListModule,
    MatSelectModule
  ],
  entryComponents:[AcompanhamentoDialogComponent]
})
export class AcompanhamentosModule {}
