import { CustomerServicesModule } from './../customer-services/customer-services.module';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    CustomerServicesModule
  ],
  declarations: [ContactDetailsComponent]
})
export class ContactUsModule { }
