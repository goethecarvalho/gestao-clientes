import { Component, OnInit } from "@angular/core";
import { Contato } from "../models/contato";
import { ContatosService } from "./contatos.service";
import { MatDialog } from "@angular/material";
import { DialogComponent } from "./dialog/dialog.component";

@Component({
  selector: "app-contatos",
  templateUrl: "./contatos.component.html",
  styleUrls: ["./contatos.component.scss"]
})
export class ContatosComponent implements OnInit {
  private contatos: Contato[] = [];
  private colunasEmExibicao: string[] = ["nome"];
  expandedElement: null;
  constructor(
    private contatosService: ContatosService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.carregarContatos();
  }

  excluir(id: number) {
    this.contatosService.excluir(id);
    this.carregarContatos();
  }

  async carregarContatos() {
    this.contatos = await this.contatosService.listar();
  }

  openDialog(contato: Contato): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "250px",
      data: { nome: contato.nome, id: contato.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluir(Number(result));
      }
    });
  }
}
