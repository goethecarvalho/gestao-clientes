import { Component, OnInit } from "@angular/core";
import { Cliente } from "../models/cliente";
import { MatDialog } from "@angular/material";
import { ClienteDialogComponent } from "./cliente-dialog/cliente-dialog.component";
import { ClientesService } from './clientes.service';

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.scss"]
})
export class ClientesComponent implements OnInit {
  private clientes: Cliente[] = [];
  private colunasEmExibicao: string[] = ["nome"];
  expandedElement: null;
  constructor(
    private clientesService: ClientesService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.carregarClientes();
  }

  excluir(id: number) {
    this.clientesService.excluir(id);
    this.carregarClientes();
  }

  async carregarClientes() {
    this.clientes = await this.clientesService.listar();
  }

  openDialog(cliente: Cliente): void {
    const dialogRef = this.dialog.open(ClienteDialogComponent, {
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
