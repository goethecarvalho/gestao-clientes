import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from 'src/app/shared/shared.module';
import { EmpresaFormRoutingModule } from './empresa-form-routing.module';
import { EmpresaFormComponent } from './empresa-form.component';

@NgModule({
  declarations: [EmpresaFormComponent],
  imports: [CommonModule, EmpresaFormRoutingModule, SharedModule]
})
export class EmpresaFormModule {}