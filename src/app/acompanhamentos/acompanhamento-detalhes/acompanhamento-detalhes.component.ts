import { Component, OnInit } from "@angular/core";
import { Cliente } from "src/app/models/cliente";
import { ActivatedRoute } from "@angular/router";
import { AcompanhamentosService } from '../acompanhamentos.service';

@Component({
  selector: "app-detalhes",
  templateUrl: "./acompanhamento-detalhes.component.html",
  styleUrls: ["./acompanhamento-detalhes.component.scss"]
})
export class AcompanhamentoDetalhesComponent implements OnInit {
  private cliente: Cliente = new Cliente();
  constructor(
    private acompanhamentosService: AcompanhamentosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.obterCliente(Number(id));
    }
  }

  async obterCliente(id: number) {
    this.cliente = await this.acompanhamentosService.obterPorId(id);
  }
}
