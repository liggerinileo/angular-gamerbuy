import { Component, OnInit } from '@angular/core';
import { ComponentDataService } from '../component-data.service';
import { PcCartService } from '../pc-cart.service';
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
      "price": 899.99,
      "stock": 7,
      "image": "https://f28ojteaog-flywheel.netdna-ssl.com/wp-content/uploads/2019/08/1541778891455-61163729_6160150817.jpg",
      "clearance": false,
      "quantity": 0,
    },
    {
      "name": "EVGA GeForce RTX 2080ti",
      "price": 1199.99,
      "stock": 5,
      "image": "https://images.evga.com/products/gallery/png/11G-P4-2487-RX_LG_1.png",
      "clearance": true,
      "quantity": 0,
    },
    {
      "name": "Gigabyte Z490 Aorus Master",
      "price": 1799.99,
      "stock": 10,
      "image": "https://computermans.com/wp-content/uploads/2020/05/13-145-196-V08-1.jpg",
      "clearance": false,
      "quantity": 0,
    },
    {
      "name": "Viewsonic 24' Curvo 144Hz Full HD",
      "price": 499.99,
      "stock": 0,
      "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16407_Monitor_Gamer_Viewsonic_24__Curvo_VX2458-C-MHD_144Hz_Full_HD_46578010-grn.jpg",
      "clearance": false,
      "quantity": 0,
    },
    {
      "name": "Silla Dxracer",
      "price": 299.99,
      "stock": 4,
      "image": "https://http2.mlstatic.com/D_NQ_NP_922626-MLA31662361773_082019-O.jpg",
      "clearance": false,
      "quantity": 0,
    },
  ]  

  // pcComponents: Pc[] = [];

  constructor(private cart: PcCartService, 
              // private componentsDataService: ComponentDataService
              ) { }

  ngOnInit(): void {
    // this.componentsDataService.getAll()
    //   .subscribe(components => this.pcComponents = components);
  }

  addToCart(pcComponent): void {
    if (pcComponent.quantity > 0) {
      this.cart.addToCart(pcComponent);
      pcComponent.stock -= pcComponent.quantity;
      pcComponent.quantity = 0;
    }
  }

}
