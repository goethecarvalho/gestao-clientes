import { Component, OnInit } from "@angular/core";
import { Produto } from "src/app/models/produto";
import { ActivatedRoute } from "@angular/router";
import { ProdutosService } from '../produtos.service';

@Component({
  selector: "app-produto-detalhes",
  templateUrl: "./produto-detalhes.component.html",
  styleUrls: ["./produto-detalhes.component.scss"]
})
export class ProdutoDetalhesComponent implements OnInit {
  private cliente: Produto = new Produto();
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.obterProduto(Number(id));
    }
  }

  async obterProduto(id: number) {
    this.cliente = await this.produtosService.obterPorId(id);
  }
}
