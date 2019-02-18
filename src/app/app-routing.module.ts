import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginGuardService } from "./login/login-guard.service";
import { AppGuardService } from "./shared/appguard.service";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule",
    canActivate: [AppGuardService]
  },
  {
    path: "contatos",
    loadChildren: "./contatos/contatos.module#ContatosModule",
    canActivate: [LoginGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
