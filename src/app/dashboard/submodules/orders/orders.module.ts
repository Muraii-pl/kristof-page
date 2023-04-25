import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ViewsModule } from '../../views/views.module';


@NgModule({
  declarations: [
    OrderPageComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ViewsModule

  ]
})
export class OrdersModule { }
