import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProducerModalComponent } from './edit-producer-modal/edit-producer-modal.component';
import { NewProducerModalComponent } from './new-producer-modal/new-producer-modal.component';
import { ModalsModule  as GlobalModule} from '../../../modals/modals.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../../../../common/ui/ui.module';



@NgModule({
  declarations: [
    EditProducerModalComponent,
    NewProducerModalComponent
  ],
  exports: [
    EditProducerModalComponent,
    NewProducerModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiModule,
    GlobalModule
  ]
})
export class ModalsModule { }
