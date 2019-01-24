import { CustomerServicesModule } from './../customer-services/customer-services.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityAndPrivacyRoutingModule } from './security-and-privacy-routing.module';
import { SecAndPrDetailsComponent } from './sec-and-pr-details/sec-and-pr-details.component';

@NgModule({
  imports: [
    CommonModule,
    SecurityAndPrivacyRoutingModule,
    CustomerServicesModule
  ],
  declarations: [SecAndPrDetailsComponent]
})
export class SecurityAndPrivacyModule { }
