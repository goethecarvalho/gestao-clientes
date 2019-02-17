import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login/login.service";
import { Usuario } from "./models/usuario";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  public usuarioLogado: Usuario;
  public usuario$: Observable<Usuario>;

  async ngOnInit() {
    this.usuario$=this.loginService.obterUsuarioLogado();
  }

  logout() {
    this.loginService.logout();
  }
}
