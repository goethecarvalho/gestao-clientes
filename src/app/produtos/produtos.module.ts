import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule, MatListModule, MatPaginatorModule,MatSelectModule } from "@angular/material";

import { ProdutosRoutingModule } from "./produtos-routing.module";
import { ProdutosComponent } from "./produtos.component";
import { SharedModule } from "../shared/shared.module";
import { ProdutoDialogComponent } from './produto-dialog/produto-dialog.component';

@NgModule({
  declarations: [
    ProdutosComponent, 
    ProdutoDialogComponent
  ],
  imports: [
    CommonModule, 
    ProdutosRoutingModule, 
    SharedModule, 
    MatTableModule, 
    MatListModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  entryComponents:[ProdutoDialogComponent]
})
export class ProdutosModule {}
