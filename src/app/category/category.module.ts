import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryContainerComponent } from './category-container/category-container.component';
import { SidebarComponent } from './category-container/sidebar/sidebar.component';
import { RelatedProductsComponent } from './category-container/related-products/related-products.component';
import { FilteredProductsComponent } from './category-container/filtered-products/filtered-products.component';
import { TopFilterComponent } from './category-container/top-filter/top-filter.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	imports: [
		CommonModule,
		CategoryRoutingModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatCheckboxModule,
		MatListModule,
		MatChipsModule,
		MatRadioModule,
		MatCardModule,
		MatButtonModule
	],
	exports: [ CategoryContainerComponent ],
	declarations: [
		CategoryContainerComponent,
		SidebarComponent,
		RelatedProductsComponent,
		FilteredProductsComponent,
		TopFilterComponent
	]
})
export class CategoryModule {}
