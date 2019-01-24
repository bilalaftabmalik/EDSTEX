import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { SearchComponent } from './header-container/search/search.component';
import { NavbarComponent } from './header-container/navbar/navbar.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderContainerComponent],

  declarations: [HeaderContainerComponent, SearchComponent, NavbarComponent]
})
export class HeaderModule { }
