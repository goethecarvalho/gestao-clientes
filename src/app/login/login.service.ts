import { Injectable } from "@angular/core";
import { Login } from "../models/login";
import { Usuario } from "../models/usuario";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { IdbService } from '../shared/idb.service';

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(
    private idbService: IdbService,
    private router: Router
  ) {
    this.carregaUsuarioLogado();
  }

  private loginSubject = new BehaviorSubject<Usuario>(null);

  private async carregaUsuarioLogado(): Promise<Usuario> {
    return this.idbService.transaction(
      "rw",
      this.idbService.login,
      async () => {
        const login = await this.idbService.login.get({
          nome: "admin"
        });
        this.loginSubject.next(login);
        return login;
      }
    );
  }

  async existeUsuarioLogado(): Promise<boolean> {
    return this.idbService.transaction(
      "rw",
      this.idbService.login,
      async () => {
        const login = (await this.idbService.login.count()) > 0;
        return login;
      }
    );
  }

  autenticar(login: Login): Promise<boolean> {
    if (login.usuario == "admin" && login.senha == "123") {
      return this.idbService.transaction(
        "rw",
        this.idbService.login,
        async () => {
          var existeUsuario =
            (await this.idbService.login
              .where({ nome: "admin" })
              .count()) == 0;
          if (existeUsuario) {
            const usuario = { nome: login.usuario };
            await this.idbService.login.add(usuario);
            this.loginSubject.next(usuario);
            return true;
          }
          return true;
        }
      );
    }
  }

  obterUsuarioLogado(): Observable<Usuario> {
    return this.loginSubject.asObservable();
  }

  logout() {
    this.idbService.login.clear();
    this.loginSubject.next(null);
    this.router.navigate([""]);
  }
}
