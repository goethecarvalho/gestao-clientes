import { Component, OnInit } from "@angular/core";
import { ContatosService } from "../contatos.service";
import { Contato } from "src/app/models/contato";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detalhes",
  templateUrl: "./detalhes.component.html",
  styleUrls: ["./detalhes.component.scss"]
})
export class DetalhesComponent implements OnInit {
  private contato: Contato=new Contato();
  constructor(
    private contatosService: ContatosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.obterContato(Number(id));
    }
  }

  async obterContato(id: number) {
    this.contato = await this.contatosService.obterPorId(id);
  }
}
