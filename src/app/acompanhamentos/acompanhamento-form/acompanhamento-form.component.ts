import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { AcompanhamentosService } from '../acompanhamentos.service';
import { Acompanhamento } from 'src/app/models/acompanhamento';
import { DropdownService } from 'src/app/shared/services/dropdown.service';

@Component({
  selector: "app-form",
  templateUrl: "./acompanhamento-form.component.html",
  styleUrls: ["./acompanhamento-form.component.scss"]
})
export class AcompanhamentoFormComponent implements OnInit {
  private form: FormGroup;
  empresas = [];
  meiosContato = [];

  constructor(
    private fb: FormBuilder,
    private acompanhamentosService: AcompanhamentosService,
    private router: Router,
    private route: ActivatedRoute,
    private dropdownService: DropdownService
  ) {}

  ngOnInit() {

    this.dropdownService.getEmpresas()
      .subscribe(dados => this.empresas = dados);

    this.dropdownService.getMeiosContato()
      .subscribe(dados => this.meiosContato = dados);

    this.form = this.fb.group({
      id: [0],
      cliente: [null, Validators.required],
      descricao: [null, Validators.required],
      data: [null, Validators.required],
      meioContato: [null, Validators.required]
    });
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.obterAcompanhamento(Number(id));
    }
  }

  salvar() {
    const acompanhamento = this.form.value as Acompanhamento;
    if (acompanhamento.id) {
      this.acompanhamentosService.atualizar(acompanhamento);
    } else {
      delete acompanhamento.id;
      this.acompanhamentosService.adicionar(acompanhamento);
    }
    this.router.navigate(["/acompanhamentos"]);
  }

  async obterAcompanhamento(id: number) {
    const acompanhamento = await this.acompanhamentosService.obterPorId(id);
    this.form.setValue(acompanhamento);
  }
}
