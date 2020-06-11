import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientesRoutingModule } from "./clientes-routing.module";
import { ClientesComponent } from "./clientes.component";
import { SharedModule } from "../shared/shared.module";
import { MatTableModule, MatListModule } from "@angular/material";
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    ClientesComponent, 
    DialogComponent
  ],
  imports: [
    CommonModule, 
    ClientesRoutingModule, 
    SharedModule, 
    MatTableModule, 
    MatListModule
  ],
  entryComponents:[DialogComponent]
})
export class ClientesModule {}
