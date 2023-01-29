import {Component, Input} from '@angular/core';
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: ProductType;
  constructor() {
    this.product ={
      id: 0,
      image: '',
      title: '',
      price: 0,
      description:''
    }
  }
}
