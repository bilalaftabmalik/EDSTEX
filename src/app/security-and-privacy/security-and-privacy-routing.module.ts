import { SecAndPrDetailsComponent } from './sec-and-pr-details/sec-and-pr-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: SecAndPrDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityAndPrivacyRoutingModule { }
