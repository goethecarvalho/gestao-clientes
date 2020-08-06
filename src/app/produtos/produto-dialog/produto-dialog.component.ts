import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-produto-dialog",
  templateUrl: "./produto-dialog.component.html",
  styleUrls: ["./produto-dialog.component.scss"]
})
export class ProdutoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProdutoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
