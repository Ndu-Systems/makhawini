import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanciesComponent } from './vacancies.component';
import { VacanciesRoutingModule } from './vacancies.routing.module';

@NgModule({
  imports: [
    CommonModule,
    VacanciesRoutingModule
  ],
  declarations: [VacanciesComponent]
})
export class VacanciesModule { }
