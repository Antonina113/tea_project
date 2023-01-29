import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import { Subscription} from "rxjs";
import {CatalogService} from "../../../shared/services/catalog.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SearchService} from "../../../shared/services/search.service";

@Component({
  selector: 'catalog-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnDestroy {

  public products: ProductType [] = [];
  public loading: boolean = false;
  public showTitle: boolean = true;
  public requestText: string | null = '';
  public requestResultNot: boolean = false;
  private subscriptionProducts: Subscription | null = null;
  private subscriptionSearch: Subscription | null = null;


  constructor(
    private catalogService: CatalogService,
    private activateRoute: ActivatedRoute,
    private route: Router,
    private searchService: SearchService) {}

  ngOnInit() {
    this.showCatalog(this.searchService.getSearchText());
    this.subscriptionSearch = this.searchService.subject.subscribe((params) => {
      this.loading = true;
      if (params) {
        this.showCatalog(params);
      } else {
        this.showCatalog('')
      }
    })
  }
  showCatalog(params: string|null){
    this.loading = true;
    if (params){
      this.showTitle = false;
      this.requestText = params;
      this.subscriptionProducts = this.catalogService.getProducts(params).subscribe(
        {
          next: data => {
            this.products = data;
            this.loading = false;
            if (this.products.length === 0){
              this.requestResultNot = true;
            }
          },
          error: (error) => {
            console.log(error);
            this.route.navigate(['/']);
          }
        }
      )
    }else {
      this.showTitle = true;
      this.subscriptionProducts = this.catalogService.getProducts('').subscribe(
        {
          next: data => {
            this.products = data;
            this.loading = false;
          },
          error: (error) => {
            console.log(error);
            this.route.navigate(['/']);
          }
        }
      )
    }
  }
  ngOnDestroy() {
    this.subscriptionProducts?.unsubscribe();
    this.subscriptionSearch?.unsubscribe();
  }
}
