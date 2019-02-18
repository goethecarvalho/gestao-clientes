import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login/login.service";
import { Usuario } from "../models/usuario";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  public usuarioLogado: Usuario;
  public usuario$: Observable<Usuario>;

  async ngOnInit() {
    this.usuario$ = this.loginService.obterUsuarioLogado();
    this.usuario$.subscribe(usuario => {
      this.usuarioLogado = usuario;
    });
  }

  logout() {
    this.loginService.logout();
  }
}
