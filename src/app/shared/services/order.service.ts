import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataOrderType} from "../../../types/data-order.type";

@Injectable({
  providedIn: 'root'
})
export class OrderService  {
  constructor( private http: HttpClient) {
  }
  sendOrder(data: DataOrderType){
    return this.http.post<{ success: number, message?: string}>(`https://testologia.site/order-tea`, data)
  }
}
