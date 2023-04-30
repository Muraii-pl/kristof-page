import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { UiModule } from '../../common/ui/ui.module';



@NgModule({
  declarations: [
    ConfirmationModalComponent
  ],
  exports: [
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ]
})
export class ModalsModule { }
