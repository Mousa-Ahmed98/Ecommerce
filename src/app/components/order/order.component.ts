import { Component } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { ProductsComponent } from '../products/products.component';
import { IProduct } from '../../models/iproduct';
import { BankCardPipe } from '../../pipes/bank-card.pipe';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductsComponent, BankCardPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  categories: ICategory[];
  products: IProduct[] = [];
  selectedCatId = 1;
  constructor(){
    this.categories = [
      {
        Id: 0,
        Name: "All"
      },
      {
        Id: 1,
        Name: "Mobiles"
      },
      {
        Id: 2,
        Name: "Televisions"
      },
      {
        Id: 3,
        Name: "Smart Watches"
      }
    ];
  }

  addToTable(product: any){
    console.log("add to table");
    this.products.push(product as IProduct);
    console.log(this.products);
  }
}
