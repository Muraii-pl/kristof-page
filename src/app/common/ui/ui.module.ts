import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    FormInputComponent,
    PrimaryButtonComponent,
    LoaderComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormInputComponent,
    PrimaryButtonComponent,
    LoaderComponent
  ]
})
export class UiModule { }
