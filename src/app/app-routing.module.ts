import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "cinema/movies", pathMatch: "full" },
  {
    path: "cinema",
    loadChildren: () =>
      import("./features/cinema/cinema.module").then((m) => m.CinemaModule),
  },
  {
    path: "account",
    loadChildren: () =>
      import("./features/account/account.module").then((m) => m.AccountModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
