import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { ViewsModule } from '../../views/views.module';


@NgModule({
  declarations: [
    ClientsPageComponent,

  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ViewsModule
  ]
})
export class ClientsModule { }
