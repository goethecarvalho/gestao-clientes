import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-empresa-dialog",
  templateUrl: "./empresa-dialog.component.html",
  styleUrls: ["./empresa-dialog.component.scss"]
})
export class EmpresaDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EmpresaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
