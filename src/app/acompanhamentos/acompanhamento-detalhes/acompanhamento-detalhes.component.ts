import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { AcompanhamentosService } from '../acompanhamentos.service';
import { Acompanhamento } from 'src/app/models/acompanhamento';

@Component({
  selector: "app-detalhes",
  templateUrl: "./acompanhamento-detalhes.component.html",
  styleUrls: ["./acompanhamento-detalhes.component.scss"]
})
export class AcompanhamentoDetalhesComponent implements OnInit {
  private acompanhamento: Acompanhamento = new Acompanhamento();
  constructor(
    private acompanhamentosService: AcompanhamentosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.obterAcompanhamento(Number(id));
    }
  }

  async obterAcompanhamento(id: number) {
    this.acompanhamento = await this.acompanhamentosService.obterPorId(id);
  }
}
