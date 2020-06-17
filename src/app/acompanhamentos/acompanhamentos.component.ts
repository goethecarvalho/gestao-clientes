import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AcompanhamentosService } from './acompanhamentos.service';
import { AcompanhamentoDialogComponent } from './acompanhamento-dialog/acompanhamento-dialog.component';
import { Acompanhamento } from '../models/acompanhamento';

@Component({
  selector: "app-acompanhamentos",
  templateUrl: "./acompanhamentos.component.html",
  styleUrls: ["./acompanhamentos.component.scss"]
})
export class AcompanhamentosComponent implements OnInit {
  private acompanhamentos: Acompanhamento[] = [];
  private colunasEmExibicao: string[] = ["descricao"];
  expandedElement: null;
  constructor(
    private acompanhamentosService: AcompanhamentosService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.carregarAcompanhamentos();
  }

  excluir(id: number) {
    this.acompanhamentosService.excluir(id);
    this.carregarAcompanhamentos();
  }

  async carregarAcompanhamentos() {
    this.acompanhamentos = await this.acompanhamentosService.listar();
  }

  openDialog(acompanhamento: Acompanhamento): void {
    const dialogRef = this.dialog.open(AcompanhamentoDialogComponent, {
      width: "250px",
      data: { nome: acompanhamento.descricao, id: acompanhamento.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluir(Number(result));
      }
    });
  }
}
