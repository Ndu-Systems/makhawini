import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { IndexComponent, BannerComponent, WorkForceComponent, ServicesComponent, BannerSmallComponent } from "./index";
 

export const declarations = [HomeComponent, LoginComponent, IndexComponent, BannerComponent, BannerSmallComponent, WorkForceComponent, ServicesComponent];
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
