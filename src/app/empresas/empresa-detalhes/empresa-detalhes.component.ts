import { Component, OnInit } from "@angular/core";
import { Empresa } from "src/app/models/empresa";
import { ActivatedRoute } from "@angular/router";
import { EmpresasService } from '../empresas.service';

@Component({
  selector: "app-empresa-detalhes",
  templateUrl: "./empresa-detalhes.component.html",
  styleUrls: ["./empresa-detalhes.component.scss"]
})
export class EmpresaDetalhesComponent implements OnInit {
  private cliente: Empresa = new Empresa();
  constructor(
    private empresasService: EmpresasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.obterEmpresa(Number(id));
    }
  }

  async obterEmpresa(id: number) {
    this.cliente = await this.empresasService.obterPorId(id);
  }
}
