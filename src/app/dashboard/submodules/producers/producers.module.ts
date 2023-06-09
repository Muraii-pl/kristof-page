import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducersRoutingModule } from './producers-routing.module';
import { ProducersPageComponent } from './pages/producers-page/producers-page.component';
import { ViewsModule } from '../../views/views.module';
import { ModalsModule as GlobalModal } from '../../modals/modals.module';
import { ModalsModule } from './modals/modals.module';


@NgModule({
  declarations: [
    ProducersPageComponent
  ],
  imports: [
    CommonModule,
    ProducersRoutingModule,
    ViewsModule,
    GlobalModal,
    ModalsModule,
    ModalsModule,
  ]
})
export class ProducersModule { }
