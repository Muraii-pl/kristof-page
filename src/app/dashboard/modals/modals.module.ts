import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { UiModule as CommonUiModule  } from '../../common/ui/ui.module';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [
    ConfirmationModalComponent
  ],
  exports: [
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    CommonUiModule,
    UiModule
  ]
})
export class ModalsModule { }
