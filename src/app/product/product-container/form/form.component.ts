import { Observable } from 'rxjs';
import { ProductService } from './../../../Shared/product.service';
import { Component, OnInit } from '@angular/core';
import { SharedClass } from 'src/app/Shared/SharedClass';
import { HttpParams } from '@angular/common/http';

export interface PeriodicElement {

  feature: any;
  value: any;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {feature: 'Sizes Available', value: 'Single: 135cm x 200cm (53" x 79"), Double: 200cm x 200cm (79" x 79"), Kingsize: 230cm x 220cm (91" x 87"), Super Kingsize: 260cm x 220cm (102" x 87"), Pillowcase: 50cm x 75cm (20" x 30")' },
  {feature: 'Colours Available',  value: 'Grey'},
  {feature: 'Brand',  value: 'Elements'},
  {feature: 'Material',  value: 'Polycotton'},
  {feature: 'Pack Size', value: 'Single: one duvet cover, one pillowcase, Double, Kingsize and Super Kingsize: one duvet cover, two pillowcases'},
  {feature: 'Washing Instructions', value: 'Machine Washable'},
  {feature: 'WashableStyle',  value: 'Patterned' }
];

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  panelOpenState = false;
  $productDetails: Observable<Object>;
  details: any;



  displayedColumns: string[] = ['feature', 'value'];
  dataSource = ELEMENT_DATA;

  constructor(private productService: ProductService) {  }

  ngOnInit() {

    this.$productDetails = this.productService.getProductDetails(SharedClass.selectedProductId);
    console.log('selected product id is', SharedClass.selectedProductId);
    this.$productDetails.subscribe(res => {

      this.details = res['product'];
      console.log('product details are', this.details);
    }, err => {

    });
  }


}
