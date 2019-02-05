import { HttpParams } from '@angular/common/http';
import { SharedClass } from 'src/app/Shared/SharedClass';
import { Observable } from 'rxjs';
import { ProductService } from './../../../Shared/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  $products: Observable<Object>;
  $productDetails: Observable<Object>;
  productArray: any;
  detailsArray: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.$products = this.productService.getProducts();
    this.$products.subscribe(res => {
      console.log(res);
      this.productArray = res['products'];
    }, err => {
      console.log(err);
    });
  }

  cardClcikFn(id) {
    const params = new HttpParams().set('p_id', id);
    console.log('params', params);
    console.log('Product id is', id);
    SharedClass.selectedProductId = id;
    this.$productDetails = this.productService.getProductDetails(id);
    this.$productDetails.subscribe(res => {

      this.detailsArray = res['product'];



    }, err => {
      console.log(err);

    });
  }

}
