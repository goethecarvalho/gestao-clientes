import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from 'src/app/shared/shared.module';
import { ProdutoFormRoutingModule } from './produto-form-routing.module';
import { ProdutoFormComponent } from './produto-form.component';

@NgModule({
  declarations: [ProdutoFormComponent],
  imports: [CommonModule, ProdutoFormRoutingModule, SharedModule]
})
export class ProdutoFormModule {}