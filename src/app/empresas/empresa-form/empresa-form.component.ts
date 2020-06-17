import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
//import { HttpClient } from '@angular/common/http';
//import { of } from 'rxjs';

import { Empresa } from "src/app/models/empresa";
import { EmpresasService } from '../empresas.service';
import { DropdownService } from 'src/app/shared/services/dropdown.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-form",
  templateUrl: "./empresa-form.component.html",
  styleUrls: ["./empresa-form.component.scss"]
})
export class EmpresaFormComponent implements OnInit {
  private form: FormGroup;
  indicacoes = [];

  constructor(
    private fb: FormBuilder,
    private empresasService: EmpresasService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dropdownService: DropdownService
  ) {
  }

  ngOnInit() {
    
    this.dropdownService.getIndicacoes()
      .subscribe(dados => this.indicacoes = dados);

    this.form = this.fb.group({
      id: [0],
      nome: ["", Validators.required],
      cnpj: [null, Validators.required],
      endereco: [null, Validators.required],
      bairro: [null, Validators.required],
      contato: [null, Validators.required],
      telefone: [null, Validators.required],
      indicacao: [null, Validators.required],
      dataCadastro: [null, Validators.required]
    });
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.obterEmpresa(Number(id));
    }
  }

  salvar() {
    const empresa = this.form.value as Empresa;
    if (empresa.id) {
      this.empresasService.atualizar(empresa);
    } else {
      delete empresa.id;
      this.empresasService.adicionar(empresa);
    }
    this.router.navigate(["/empresas"]);
  }

  async obterEmpresa(id: number) {
    const empresa = await this.empresasService.obterPorId(id);
    this.form.setValue(empresa);
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
