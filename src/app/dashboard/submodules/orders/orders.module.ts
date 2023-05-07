import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ViewsModule } from '../../views/views.module';
import { UiModule } from '../../../common/ui/ui.module';
import { ModalsModule as GlobalModal } from '../../modals/modals.module';
import { ModalsModule } from './modals/modals.module';


@NgModule({
  declarations: [
    OrderPageComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ViewsModule,
    UiModule,
    GlobalModal,
    ModalsModule

  ]
})
export class OrdersModule { }
