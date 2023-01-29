import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {ProductCardComponent} from "../../shared/components/product-card/product-card.component";

const routes: Routes = [
  {path:'catalog', component: ProductsComponent},
  {path:'product/:id', component: ProductCardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
