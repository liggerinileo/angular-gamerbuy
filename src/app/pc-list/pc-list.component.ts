import { Component, OnInit } from '@angular/core';
import { Pc } from './Pc';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.scss']
})
export class PcListComponent implements OnInit {

  pcComponents: Pc[] = [
    {
      "name": "Intel Core i9 9900k",
      "productType": "CPU",
      "price": 899.99,
      "stock": 7,
      "image": "assets/img/intelcorei9.jpg",
      "clearance": false,
      "quantity": 0,
    },
    {
      "name": "Nvidia GeForce RTX 2080ti",
      "productType": "GPU",
      "price": 1199.99,
      "stock": 5,
      "image": "assets/img/intelcorei9.jpg",
      "clearance": true,
      "quantity": 0,
    },
    {
      "name": "Gigabyte Z490 Aorus Master",
      "productType": "Motherboard",
      "price": 1799.99,
      "stock": 10,
      "image": "assets/img/intelcorei9.jpg",
      "clearance": false,
      "quantity": 0,
    },
    {
      "name": "Viewsonic 24' Curvo 144Hz Full HD",
      "productType": "Monitor",
      "price": 499.99,
      "stock": 0,
      "image": "assets/img/intelcorei9.jpg",
      "clearance": false,
      "quantity": 0,
    },
  ]  
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(pcComponent: Pc): void {
    if (pcComponent.quantity < pcComponent.stock) {
      pcComponent.quantity++;
    }
  }

  downQuantity(pcComponent: Pc): void {
    if (pcComponent.quantity > 0) {
      pcComponent.quantity--;
    }
  }

  changeQuantity(event, pcComponent: Pc): void {
    event.preventDefault();
  }

}
