import { CandidatesComponent } from "./candidates.component";
import { CandidateRoutingModule } from "./candidates.routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageHeaderModule, PrimeNg } from "../../shared";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
    imports: [
        CommonModule,
        CandidateRoutingModule,
        FormsModule,
        Ng2SearchPipeModule,
        ...PrimeNg,
        NgxPaginationModule,
        ReactiveFormsModule,
        PageHeaderModule
    ],
    exports: [...PrimeNg],
    declarations: [CandidatesComponent]
})
export class CandidatesModule {}
