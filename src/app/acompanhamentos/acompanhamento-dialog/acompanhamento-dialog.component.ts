import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-acompanhamento-dialog",
  templateUrl: "./acompanhamento-dialog.component.html",
  styleUrls: ["./acompanhamento-dialog.component.scss"]
})
export class AcompanhamentoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AcompanhamentoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
