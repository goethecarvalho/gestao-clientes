import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root"
})
export class LoginGuardService implements CanActivate {
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    if (await this.loginService.existeUsuarioLogado()) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }

  constructor(private router: Router, private loginService: LoginService) {}
}
