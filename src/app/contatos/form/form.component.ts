import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Contato } from "src/app/models/contato";
import { ContatosService } from "../contatos.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  private form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contatosService: ContatosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: [0],
      nome: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      telefone: ["", Validators.required]
    });
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.obterContato(Number(id));
    }
  }

  salvar() {
    const contato = this.form.value as Contato;
    if (contato.id) {
      this.contatosService.atualizar(contato);
    } else {
      delete contato.id;
      this.contatosService.adicionar(contato);
    }
    this.router.navigate(["/contatos"]);
  }

  async obterContato(id: number) {
    const contato = await this.contatosService.obterPorId(id);
    this.form.setValue(contato);
  }
}
