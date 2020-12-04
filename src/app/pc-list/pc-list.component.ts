import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.scss']
})
export class PcListComponent implements OnInit {

  pcComponent = {
    "name": "Intel Core i9 9900k",
    "productType": "CPU",
    "price": 899.99,
    "stock": 7,
    "image": "assets/img/intelcorei9.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
