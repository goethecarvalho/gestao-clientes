import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule, MatListModule, MatPaginatorModule,MatSelectModule } from "@angular/material";

import { EmpresasRoutingModule } from "./empresas-routing.module";
import { EmpresasComponent } from "./empresas.component";
import { SharedModule } from "../shared/shared.module";
import { EmpresaDialogComponent } from './empresa-dialog/empresa-dialog.component';

@NgModule({
  declarations: [
    EmpresasComponent, 
    EmpresaDialogComponent
  ],
  imports: [
    CommonModule, 
    EmpresasRoutingModule, 
    SharedModule, 
    MatTableModule, 
    MatListModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  entryComponents:[EmpresaDialogComponent]
})
export class EmpresasModule {}
