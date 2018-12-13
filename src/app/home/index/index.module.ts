import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRouting, declarations } from './index.routing';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
    imports: [CommonModule,IndexRouting, CarouselModule.forRoot()],
    declarations: [...declarations],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [],
    providers: []
})


export class IndexModule {}