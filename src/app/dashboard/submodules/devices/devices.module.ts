import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesPageComponent } from './pages/devices-page/devices-page.component';
import { ViewsModule } from '../../views/views.module';
import { ModalsModule } from './modals/modals.module';
import { ModalsModule as GlobalModal } from '../../modals/modals.module';


@NgModule({
  declarations: [
    DevicesPageComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    ViewsModule,
    ModalsModule,
    GlobalModal
  ]
})
export class DevicesModule { }
