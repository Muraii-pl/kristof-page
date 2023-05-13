import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-input[title][type]',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true
    }
  ]
})
export class FormInputComponent implements OnInit, ControlValueAccessor {

  @Input() title: string;
  @Input() type: string;
  @Input() lPosition: 'top' | 'left' = 'top'
  @Input() fControlName: string;
  @Input() fGroup: FormGroup;

  public value: string;
  public isDisable: boolean;

  constructor() { }

  public ngOnInit(): void {
  }

  public onChange: any = () => {};
  public onTouch: any = () => {};

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

   public setDisabledState(isDisabled: boolean) {
    this.isDisable = isDisabled;
  }

  public writeValue(obj: any): void {
    this.value = obj;
  }

}
