import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BorderShadowDirective } from '../../directives/border-shadow.directive';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, BorderShadowDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {

  @Input() catId = 0;
  @Output() buyProduct: EventEmitter<IProduct>
//   buy(product: IProduct) {
//   if(product.Quantity > 1)
//   product.Quantity -= 1;
// }
  products: IProduct[];
  productToEmit: IProduct;
  filteredProducts: IProduct[];  
  constructor(){
    
    this.buyProduct = new EventEmitter();
    this.products = [
      {
        Id: 1,
        Name: "Samsung s21",
        Quantity: 10,
        CatId: 1,
        ImageUrl:"https://m.media-amazon.com/images/I/61mOx8va+LL._AC_SX679_.jpg"
      },
      {
        Id: 2,
        Name: "Redmi note 8",
        Quantity: 8,
        CatId: 1,
        ImageUrl:"https://m.media-amazon.com/images/I/61mOx8va+LL._AC_SX679_.jpg"
      },

      {
        Id: 3,
        Name: "Sony TV",
        Quantity: 12,
        CatId: 2,
        ImageUrl:"https://m.media-amazon.com/images/I/61mOx8va+LL._AC_SX679_.jpg"
      },
      {
        Id: 4,
        Name: "LG TV",
        Quantity: 0,
        CatId: 2,
        ImageUrl:"https://m.media-amazon.com/images/I/61mOx8va+LL._AC_SX679_.jpg"
      },

      {
        Id: 5,
        Name: "Apple watch",
        Quantity: 12,
        CatId: 3,
        ImageUrl:"https://m.media-amazon.com/images/I/61mOx8va+LL._AC_SX679_.jpg"
      },
      {
        Id: 6,
        Name: "Huauie watch",
        Quantity: 0,
        CatId: 3,
        ImageUrl:"https://m.media-amazon.com/images/I/61mOx8va+LL._AC_SX679_.jpg"
      },
    ]
    this.productToEmit = this.products[0];
    this.filteredProducts = this.products;
  }

  ngOnChanges(){
    this.filterProducts();
  }

  filterProducts(){
    if(this.catId == 0){
      this.filteredProducts = this.products;
    }
    else{
       this.filteredProducts = this.products.filter((p)=>p.CatId == this.catId);
    }
  }



  ////////Event

  buy(prd:IProduct){
    console.log("Event works");
    this.productToEmit = prd;
    console.log(this.productToEmit);
    this.buyProduct.emit(this.productToEmit);
  }
}
