import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { LoaderComponent } from './loader/loader.component';
import { BaseModalComponent } from './base-modal/base-modal.component';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [
    FormInputComponent,
    PrimaryButtonComponent,
    LoaderComponent,
    BaseModalComponent,
    DropdownComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormInputComponent,
    PrimaryButtonComponent,
    LoaderComponent,
    BaseModalComponent,
    DropdownComponent
  ]
})
export class UiModule { }
