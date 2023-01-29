import { Injectable } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {HttpClient,} from "@angular/common/http";
import { Observable,} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  constructor(private http: HttpClient, ) {
  }
  getProducts(params:string | null): Observable<ProductType[]> {
    return this.http.get< ProductType[]>(`https://testologia.site/tea?search=${params}`);
  }
  getProduct(id: number): Observable<ProductType>{
    return this.http.get< ProductType>(`https://testologia.site/tea?id=${id}`);
  }
}
