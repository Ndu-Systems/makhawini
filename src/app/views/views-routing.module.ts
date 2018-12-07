import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';

const routes: Routes = [
    {
        path: '',
        component: ViewsComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'candidates', loadChildren: './candidates/candidates.module#CandidatesModule' },
            { path: 'vacancies', loadChildren: './vacancies/vacancies.module#VacanciesModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule {}
