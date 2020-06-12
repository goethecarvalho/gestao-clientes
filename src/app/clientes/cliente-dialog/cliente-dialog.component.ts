import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-cliente-dialog",
  templateUrl: "./cliente-dialog.component.html",
  styleUrls: ["./cliente-dialog.component.scss"]
})
export class ClienteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ClienteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
