import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContatosRoutingModule } from "./contatos-routing.module";
import { ContatosComponent } from "./contatos.component";
import { SharedModule } from "../shared/shared.module";
import { MatTableModule, MatListModule } from "@angular/material";
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [ContatosComponent, DialogComponent],
  imports: [CommonModule, ContatosRoutingModule, SharedModule, MatTableModule, MatListModule],
  entryComponents:[DialogComponent]
})
export class ContatosModule {}
