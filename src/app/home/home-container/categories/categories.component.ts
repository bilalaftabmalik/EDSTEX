import { ProductService } from './../../../Shared/product.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  $getCategories: Observable<Object>;
  cArray: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.$getCategories = this.productService.getCategories();
    this.$getCategories
    .subscribe(res => {
      console.log(res);
      this.cArray = res['categories'];
    }, err => {
      console.log(err);
    });
  }

}
