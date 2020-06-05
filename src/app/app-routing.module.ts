import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginGuardService } from "./login/login-guard.service";
import { AppGuardService } from "./shared/guard/appguard.service";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule",
    canActivate: [AppGuardService]
  },
  {
    path: "clientes",
    loadChildren: "./clientes/clientes.module#ClientesModule",
    canActivate: [LoginGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
