import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { IndexComponent } from "./index";
import { BannerComponent } from "./index/banner";
import { WorkForceComponent } from "./index/work-force";
import { ServicesComponent } from "./index/services";

export const declarations = [HomeComponent, LoginComponent, IndexComponent, BannerComponent, WorkForceComponent, ServicesComponent];
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "", component: IndexComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
