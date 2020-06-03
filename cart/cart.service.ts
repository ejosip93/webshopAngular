import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor() { }

  addToCart(proizvod) {
    if (!this.items.includes(proizvod)) {
      this.items.push(proizvod);
    }
  }

  getItems() {
    return this.items;
  }

  getItemsAsString() {
    let ispis = '';
    this.items.forEach(it => ispis = ispis + ' ' + it.name + ' ' + it.weight + ' kg,');
    return ispis.substring(0, ispis.length - 1);
  }

  removeItem(item) {
    const position = this.items.indexOf(item);
    this.items = this.items.filter((value, index, arr) => {
      return index !== position;
    });
  }

  removeAllItems() {
    this.items = [];
  }
}
