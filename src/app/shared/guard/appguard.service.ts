import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { LoginService } from "../../login/login.service";

@Injectable({
  providedIn: "root"
})
export class AppGuardService implements CanActivate {
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    if (await this.loginService.existeUsuarioLogado()) {
      this.router.navigate(["clientes"]);
      return false;
    }
    return true;
  }

  constructor(private router: Router, private loginService: LoginService) {}
}
