import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';

@Component ({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  // @Input({ required: true }) img: string = '';
  // @Input({ required: true }) price: number = 0;
  // @Input({ required: true }) title: string = '';

  @Output() addToCart = new EventEmitter();

  addToCartHandler () {
    this.addToCart.emit(this.product);
  }
}
