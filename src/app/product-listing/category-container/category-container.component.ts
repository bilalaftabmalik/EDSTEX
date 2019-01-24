import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
