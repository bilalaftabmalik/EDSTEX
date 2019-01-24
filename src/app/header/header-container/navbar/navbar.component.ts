import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navData = [
    'Towels',
    'Bedding',
    'Bath Robes',
    'Table Cloths',
    'Duvets',
    'Pillows',
    'Kitchen Ware',
    'Bath Mats',
    'Curtains',
    'Towel Bales',
    'Industries',
    'Wholeslae'

  ];
  constructor() { }

  ngOnInit() {
  }

}
