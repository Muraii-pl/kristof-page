import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducersRoutingModule } from './producers-routing.module';
import { ProducersPageComponent } from './pages/producers-page/producers-page.component';
import { ViewsModule } from '../../views/views.module';


@NgModule({
  declarations: [
    ProducersPageComponent
  ],
  imports: [
    CommonModule,
    ProducersRoutingModule,
    ViewsModule
  ]
})
export class ProducersModule { }
