import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesPageComponent } from './pages/devices-page/devices-page.component';
import { ViewsModule } from '../../views/views.module';


@NgModule({
  declarations: [
    DevicesPageComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    ViewsModule
  ]
})
export class DevicesModule { }
