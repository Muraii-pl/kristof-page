import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../common/ui/ui.module';
import { ViewsModule } from './views/views.module';


@NgModule({
  declarations: [
    DashboardPageComponent,
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    UiModule,
    ViewsModule
  ]
})
export class DashboardModule { }
