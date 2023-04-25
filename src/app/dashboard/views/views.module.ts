import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../../common/ui/ui.module';



@NgModule({
  declarations: [
    TableComponent,
    AsideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiModule
  ],
  exports: [
    TableComponent,
    AsideMenuComponent
  ]
})
export class ViewsModule { }
