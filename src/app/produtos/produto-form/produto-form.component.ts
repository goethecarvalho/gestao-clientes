import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Produto } from "src/app/models/produto";
import { ProdutosService } from '../produtos.service';
import { DropdownService } from 'src/app/shared/services/dropdown.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-form",
  templateUrl: "./produto-form.component.html",
  styleUrls: ["./produto-form.component.scss"]
})
export class ProdutoFormComponent implements OnInit {
  private form: FormGroup;
  indicacoes = [];

  constructor(
    private fb: FormBuilder,
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dropdownService: DropdownService
  ) {
  }

  ngOnInit() {
    
    this.dropdownService.getIndicacoes()
      .subscribe(dados => this.indicacoes = dados);

    this.form = this.fb.group({
      id: [0],
      nome: ["", Validators.required]   });
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.obterProduto(Number(id));
    }
  }

  salvar() {
    const produto = this.form.value as Produto;
    if (produto.id) {
      this.produtosService.atualizar(produto);
    } else {
      delete produto.id;
      this.produtosService.adicionar(produto);
    }
    this.router.navigate(["/produtos"]);
  }

  async obterProduto(id: number) {
    const produto = await this.produtosService.obterPorId(id);
    this.form.setValue(produto);
  }
}
