import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';
import { Shipping } from './shippings';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  RUTA_API="http://localhost:/3000/envio";

  constructor(private http: HttpClient) {}
  getShippingPrices() {
    return this.http.get<{ id: number, img: string, type: string, price: number }[]>
      ('/assets/shipping.json')
  }
  // items for Product
  items: Product[] = [];

  // For add to cart
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  deleteCart(product: Product): void {
    this.deleteCart(product);
  }

  // ----------------------------------

  //items for shippings price
  item: Shipping[] = [];

  addToShipping(shipping: Shipping) {
    this.item.push(shipping);
  }

  getItem() {
    return this.item;
  }

  clearShipping() {
    this.item = [];
    return this.item;
  }

  deleteShipping(shipping: Shipping): void {
    console.log('Delete Shipping');
    this.deleteShipping(shipping);
  }
   
}
