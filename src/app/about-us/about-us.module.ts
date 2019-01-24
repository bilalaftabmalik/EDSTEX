import { CustomerServicesModule } from './../customer-services/customer-services.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsDetailsComponent } from './about-us-details/about-us-details.component';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    CustomerServicesModule
  ],
  declarations: [AboutUsDetailsComponent]
})
export class AboutUsModule { }
