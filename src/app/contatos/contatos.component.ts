import { Component, OnInit } from "@angular/core";
import { Contato } from "../models/contato";
import { ContatosService } from "./contatos.service";

@Component({
  selector: "app-contatos",
  templateUrl: "./contatos.component.html",
  styleUrls: ["./contatos.component.scss"]
})
export class ContatosComponent implements OnInit {
  private contatos: Contato[] = [];
  private colunasEmExibicao: string[] = ["nome"];
  expandedElement: null;
  constructor(private contatosService: ContatosService) {}

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
}
