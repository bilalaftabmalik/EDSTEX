import { CustomerServicesModule } from './../customer-services/customer-services.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsAndConditionsRoutingModule } from './terms-and-conditions-routing.module';
import { TmAndConDetailsComponent } from './tm-and-con-details/tm-and-con-details.component';

@NgModule({
  imports: [
    CommonModule,
    TermsAndConditionsRoutingModule,
    CustomerServicesModule
  ],
  declarations: [TmAndConDetailsComponent]
})
export class TermsAndConditionsModule { }
