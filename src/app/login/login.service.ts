import { Injectable } from "@angular/core";
import { Login } from "../models/login";
import { Usuario } from "../models/usuario";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { IdbService } from "../shared/idb.service";
import Dexie from "dexie";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  public login!: Dexie.Table<Usuario, number>;

  constructor(private idbService: IdbService, private router: Router) {
    this.login = idbService.table("login");
    this.carregaUsuarioLogado();
  }

  private loginSubject = new BehaviorSubject<Usuario>(null);

  private async carregaUsuarioLogado(): Promise<Usuario> {
    const login = await this.login.get({
      nome: "admin"
    });
    this.loginSubject.next(login);
    return login;
  }

  async existeUsuarioLogado(): Promise<boolean> {
    const usuarioLogado = (await this.login.count()) > 0;
    return usuarioLogado;
  }

  async autenticar(login: Login): Promise<boolean> {
    if (login.usuario == "admin" && login.senha == "123") {
      var existeUsuario =
        (await this.login.where({ nome: "admin" }).count()) == 0;
      if (existeUsuario) {
        const usuario = { nome: login.usuario };
        await this.login.add(usuario);
        this.loginSubject.next(usuario);
        return true;
      }
      return true;
    }
  }

  obterUsuarioLogado(): Observable<Usuario> {
    return this.loginSubject.asObservable();
  }

  logout() {
    this.login.clear();
    this.loginSubject.next(null);
    this.router.navigate([""]);
  }
}
