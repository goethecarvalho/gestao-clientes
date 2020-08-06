import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginGuardService } from "./login/login-guard.service";
import { AppGuardService } from "./shared/guard/appguard.service";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [AppGuardService]
  },
  {
    path: "empresas",
    loadChildren: () => import('./empresas/empresas.module').then(m => m.EmpresasModule),
    canActivate: [LoginGuardService]
  },
  {
    path: "acompanhamentos",
    loadChildren: () => import('./acompanhamentos/acompanhamentos.module').then(m => m.AcompanhamentosModule),
    canActivate: [LoginGuardService]
  },
  {
    path: "produtos",
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule),
    canActivate: [LoginGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
