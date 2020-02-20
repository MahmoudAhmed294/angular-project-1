import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './share/Component/home/home.component';
import { ProductsComponent } from './share/Component/products/products.component';
import { CartComponent } from './share/Component/cart/cart.component';
import { LoginComponent } from './share/Component/login/login.component';
import { RegisterComponent } from './share/Component/register/register.component';
import { ItemComponent } from './share/Component/home/item/item.component';
import { LtloginComponent } from './share/layouts/ltlogin/ltlogin.component';
import { AuthsService } from './share/services/auths.service';
import { NavbarsComponent } from './share/layouts/navbars/navbars.component';
import { AddcartComponent } from './share/component/addcart/addcart/addcart.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ItemComponent,
    LtloginComponent,
    NavbarsComponent,
    AddcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
