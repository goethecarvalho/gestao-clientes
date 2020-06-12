import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from 'src/app/shared/shared.module';
import { ClienteFormRoutingModule } from './cliente-form-routing.module';
import { ClienteFormComponent } from './cliente-form.component';

@NgModule({
  declarations: [ClienteFormComponent],
  imports: [CommonModule, ClienteFormRoutingModule, SharedModule]
})
export class ClienteFormModule {}