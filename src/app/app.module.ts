import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { ProductsComponent } from './views/products/products/products.component';
import { ProductComponent } from './views/products/product/product.component';
import { OrderComponent } from './views/order/order.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule} from "@angular/common/http";
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {MainModule} from "./views/main/main.module";
import {ProductsModule} from "./views/products/products.module";
import {OrderModule} from "./views/order/order.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    MainModule,
    ProductsModule,
    OrderModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
