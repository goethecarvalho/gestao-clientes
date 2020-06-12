import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientesRoutingModule } from "./clientes-routing.module";
import { ClientesComponent } from "./clientes.component";
import { SharedModule } from "../shared/shared.module";
import { MatTableModule, MatListModule } from "@angular/material";
import { ClienteDialogComponent } from './cliente-dialog/cliente-dialog.component';

@NgModule({
  declarations: [
    ClientesComponent, 
    ClienteDialogComponent
  ],
  imports: [
    CommonModule, 
    ClientesRoutingModule, 
    SharedModule, 
    MatTableModule, 
    MatListModule
  ],
  entryComponents:[ClienteDialogComponent]
})
export class ClientesModule {}
