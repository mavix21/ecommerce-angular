import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';


@Component ({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor () {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=29',
        createdOn: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 140,
        image: 'https://picsum.photos/640/640?r=98',
        createdOn: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 89.9,
        image: 'https://picsum.photos/640/640?r=77',
        createdOn: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 4',
        price: 100,
        image: 'https://picsum.photos/640/640?r=14',
        createdOn: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 5',
        price: 140,
        image: 'https://picsum.photos/640/640?r=17',
        createdOn: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 6',
        price: 87.9,
        image: 'https://picsum.photos/640/640?r=99',
        createdOn: new Date().toISOString()
      }
    ];

    this.products.set(initProducts);
  }

  addToCart (product: Product) {
    this.cart.update(prevState => [...prevState, product]);
  }
}
