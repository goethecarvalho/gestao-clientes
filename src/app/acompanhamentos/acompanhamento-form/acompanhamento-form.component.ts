import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Cliente } from "src/app/models/cliente";
import { Router, ActivatedRoute } from "@angular/router";
import { AcompanhamentosService } from '../acompanhamentos.service';

@Component({
  selector: "app-form",
  templateUrl: "./acompanhamento-form.component.html",
  styleUrls: ["./acompanhamento-form.component.scss"]
})
export class AcompanhamentoFormComponent implements OnInit {
  private form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private acompanhamentosService: AcompanhamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: [0],
      nome: ["", Validators.required],
      endereco: [null, Validators.required],
      bairro: [null, Validators.required],
      contato: [null, Validators.required],
      telefone: [null, Validators.required],
      indicacao: [null, Validators.required],
      dataCadastro: [null, Validators.required]
    });
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.obterCliente(Number(id));
    }
  }

  salvar() {
    const cliente = this.form.value as Cliente;
    if (cliente.id) {
      this.acompanhamentosService.atualizar(cliente);
    } else {
      delete cliente.id;
      this.acompanhamentosService.adicionar(cliente);
    }
    this.router.navigate(["/acompanhamentos"]);
  }

  async obterCliente(id: number) {
    const cliente = await this.acompanhamentosService.obterPorId(id);
    this.form.setValue(cliente);
  }
}
