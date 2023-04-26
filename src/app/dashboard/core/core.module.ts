import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuDirective } from './directive/context-menu.directive';



@NgModule({
  declarations: [
    ContextMenuDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
