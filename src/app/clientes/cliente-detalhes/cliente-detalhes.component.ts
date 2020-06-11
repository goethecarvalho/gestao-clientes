import { Component, OnInit } from "@angular/core";
import { Cliente } from "src/app/models/cliente";
import { ActivatedRoute } from "@angular/router";
import { ClientesService } from '../clientes.service';

@Component({
  selector: "app-cliente-detalhes",
  templateUrl: "./cliente-detalhes.component.html",
  styleUrls: ["./cliente-detalhes.component.scss"]
})
export class ClienteDetalhesComponent implements OnInit {
  private cliente: Cliente = new Cliente();
  constructor(
    private clientesService: ClientesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.obterCliente(Number(id));
    }
  }

  async obterCliente(id: number) {
    this.cliente = await this.clientesService.obterPorId(id);
  }
}
