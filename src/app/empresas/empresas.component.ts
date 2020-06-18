import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatTableDataSource } from "@angular/material";

import { Empresa } from "../models/empresa";
import { EmpresasService } from './empresas.service';
import { EmpresaDialogComponent } from './empresa-dialog/empresa-dialog.component';

@Component({
  selector: "app-empresas",
  templateUrl: "./empresas.component.html",
  styleUrls: ["./empresas.component.scss"]
})
export class EmpresasComponent implements OnInit {
  private empresas: Empresa[] = [];
  private colunasEmExibicao: string[] = ["nome"];
  dataSource: MatTableDataSource<Empresa>;
  expandedElement: null;

  constructor(
    private empresasService: EmpresasService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.carregarEmpresas();
  }

  excluir(id: number) {
    this.empresasService.excluir(id);
    this.carregarEmpresas();
  }

  async carregarEmpresas() {
    this.empresas = await this.empresasService.listar();    
  }

  openDialog(empresa: Empresa): void {
    const dialogRef = this.dialog.open(EmpresaDialogComponent, {
      width: "250px",
      data: { nome: empresa.nome, id: empresa.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluir(Number(result));
      }
    });
  }
}
