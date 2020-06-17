import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule
} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ],
  declarations: [],
  providers: [ DropdownService ]
})
export class SharedModule {}
