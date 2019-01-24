import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListingRoutingModule } from './product-listing-routing.module';
import { CategoryContainerComponent } from './category-container/category-container.component';
import { ProductBannerComponent } from './category-container/product-banner/product-banner.component';
import { ProductTypesComponent } from './category-container/product-types/product-types.component';
import { ProductDescriptionComponent } from './category-container/product-description/product-description.component';
import { ProductFiltersComponent } from './category-container/product-filters/product-filters.component';

@NgModule({
  imports: [
    CommonModule,
    ProductListingRoutingModule
  ],
  declarations: [CategoryContainerComponent, ProductBannerComponent, ProductTypesComponent, ProductDescriptionComponent, ProductFiltersComponent]
})
export class ProductListingModule { }
