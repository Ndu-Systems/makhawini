import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { IndexComponent } from "./index";

export const declarations = [HomeComponent, LoginComponent, IndexComponent];
const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [{ path: "login", component: LoginComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
