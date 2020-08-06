import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatTableDataSource } from "@angular/material";

import { Produto } from "../models/produto";
import { ProdutosService } from './produtos.service';
import { ProdutoDialogComponent } from './produto-dialog/produto-dialog.component';

@Component({
  selector: "app-produtos",
  templateUrl: "./produtos.component.html",
  styleUrls: ["./produtos.component.scss"]
})
export class ProdutosComponent implements OnInit {
  private produtos: Produto[] = [];
  private colunasEmExibicao: string[] = ["nome"];
  dataSource: MatTableDataSource<Produto>;
  expandedElement: null;

  constructor(
    private produtosService: ProdutosService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.carregarProdutos();
  }

  excluir(id: number) {
    this.produtosService.excluir(id);
    this.carregarProdutos();
  }

  async carregarProdutos() {
    this.produtos = await this.produtosService.listar();    
  }

  openDialog(produto: Produto): void {
    const dialogRef = this.dialog.open(ProdutoDialogComponent, {
      width: "250px",
      data: { nome: produto.nome, id: produto.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluir(Number(result));
      }
    });
  }
}
