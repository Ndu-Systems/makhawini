import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { HomePcNavComponent } from './home-pc-nav/home-pc-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UlItemsComponent } from './ul-items/ul-items.component';
import { CardComponent } from './card';

@NgModule({
  imports: [
    CommonModule,RouterModule 
  ],
  exports:[HomePcNavComponent ,SideNavComponent,MobileNavComponent,CardComponent],
  declarations: [SharedComponent,HomePcNavComponent,SideNavComponent,UlItemsComponent,MobileNavComponent, CardComponent]
})
export class SharedModule { }
