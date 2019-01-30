import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductContainerComponent } from './product-container/product-container.component';
import { GalleryComponent } from './product-container/gallery/gallery.component';
import { FormComponent } from './product-container/form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { SuggestionsComponent } from './product-container/suggestions/suggestions.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule
  ],
  declarations: [ProductContainerComponent, GalleryComponent, FormComponent, SuggestionsComponent]
})
export class ProductModule { }
