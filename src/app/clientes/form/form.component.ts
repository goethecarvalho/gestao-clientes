import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Cliente } from "src/app/models/cliente";
import { Router, ActivatedRoute } from "@angular/router";
import { ClientesService } from '../clientes.service';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  private form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientesService: ClientesService,
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
      indicacao: [null, Validators.required]
    });
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.obterCliente(Number(id));
    }
  }

  salvar() {
    const cliente = this.form.value as Cliente;
    if (cliente.id) {
      this.clientesService.atualizar(cliente);
    } else {
      delete cliente.id;
      this.clientesService.adicionar(cliente);
    }
    this.router.navigate(["/clientes"]);
  }

  async obterCliente(id: number) {
    const cliente = await this.clientesService.obterPorId(id);
    this.form.setValue(cliente);
  }
}
