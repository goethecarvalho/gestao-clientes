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
  MatSnackBar,
  MatCardModule
} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatMenuModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class SharedModule {}
