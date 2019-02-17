import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContatosRoutingModule } from "./contatos-routing.module";
import { ContatosComponent } from "./contatos.component";
import { SharedModule } from "../shared/shared.module";
import { MatTableModule, MatListModule } from "@angular/material";

@NgModule({
  declarations: [ContatosComponent],
  imports: [CommonModule, ContatosRoutingModule, SharedModule, MatTableModule, MatListModule]
})
export class ContatosModule {}
