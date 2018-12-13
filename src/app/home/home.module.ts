import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { declarations, HomeRoutes } from './home.routing';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    NgbDropdownModule.forRoot(),
    CarouselModule.forRoot()
  ],
  declarations: [...declarations]
})
export class HomeModule { }
