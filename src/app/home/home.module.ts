import { MatGridListModule } from '@angular/material';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeMenuComponent } from './home-container/home-menu/home-menu.component';
import { FeaturedComponent } from './home-container/featured/featured.component';
import { CategoriesComponent } from './home-container/categories/categories.component';
import { BestProductComponent } from './home-container/best-product/best-product.component';
import { SuggestedProductsComponent } from './home-container/suggested-products/suggested-products.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
	imports: [ CommonModule, HomeRoutingModule, MatGridListModule, MatTabsModule ],
	exports: [ HomeContainerComponent ],
	declarations: [
		HomeContainerComponent,
		HomeMenuComponent,
		FeaturedComponent,
		CategoriesComponent,
		BestProductComponent,
		SuggestedProductsComponent
	]
})
export class HomeModule {}
