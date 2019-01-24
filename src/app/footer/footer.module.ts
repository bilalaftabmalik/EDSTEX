import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterContainerComponent } from './footer-container/footer-container.component';
import { LinksComponent } from './footer-container/links/links.component';
import { ContactInfoComponent } from './footer-container/contact-info/contact-info.component';
import { PaymentMethodsComponent } from './footer-container/payment-methods/payment-methods.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    FooterContainerComponent
  ],
  declarations: [FooterContainerComponent, LinksComponent, ContactInfoComponent, PaymentMethodsComponent]
})
export class FooterModule { }
