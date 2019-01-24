
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerServicesMenuComponent } from './customer-services-menu/customer-services-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CustomerServicesMenuComponent
  ],
  declarations: [ CustomerServicesMenuComponent]
})
export class CustomerServicesModule { }
