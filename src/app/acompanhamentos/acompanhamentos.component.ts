import { Component, OnInit } from "@angular/core";
import { Cliente } from "../models/cliente";
import { MatDialog } from "@angular/material";
import { AcompanhamentoDialogComponent } from "./acompanhamento-dialog/acompanhamento-dialog.component";
import { AcompanhamentosService } from './acompanhamentos.service';

@Component({
  selector: "app-acompanhamentos",
  templateUrl: "./acompanhamentos.component.html",
  styleUrls: ["./acompanhamentos.component.scss"]
})
export class AcompanhamentosComponent implements OnInit {
  private clientes: Cliente[] = [];
  private colunasEmExibicao: string[] = ["nome"];
  expandedElement: null;
  constructor(
    private acompanhamentosService: AcompanhamentosService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.carregarClientes();
  }

  excluir(id: number) {
    this.acompanhamentosService.excluir(id);
    this.carregarClientes();
  }

  async carregarClientes() {
    this.clientes = await this.acompanhamentosService.listar();
  }

  openDialog(cliente: Cliente): void {
    const dialogRef = this.dialog.open(AcompanhamentoDialogComponent, {
      width: "250px",
      data: { nome: cliente.nome, id: cliente.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluir(Number(result));
      }
    });
  }
}
