import { Component, OnInit } from "@angular/core";
import { Cliente } from "src/app/models/cliente";
import { ActivatedRoute } from "@angular/router";
import { ClientesService } from '../clientes.service';

@Component({
  selector: "app-detalhes",
  templateUrl: "./detalhes.component.html",
  styleUrls: ["./detalhes.component.scss"]
})
export class DetalhesComponent implements OnInit {
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
