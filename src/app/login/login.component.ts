import { Component, OnInit } from "@angular/core";
import { Login } from "../models/login";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";
import { Subject } from "rxjs";
import { Usuario } from "../models/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public loginModel: Login;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginService.logout();
    this.form = fb.group({
      usuario: ["", Validators.required],
      senha: ["", Validators.compose([Validators.required])]
    });
  }

  async ngOnInit() {}

  async login() {
    const login = this.form.value as Login;
    const usuarioAutenticado = await this.loginService.autenticar(login);
    if (usuarioAutenticado) {
      this.router.navigate(["clientes"]);
    } else {
      console.log("verificar os dados");
    }
  }
}
