import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IDropdownConfig } from '../../core/interfaces';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent<T> implements OnInit, ControlValueAccessor {

  @Input() set options(options: T[]) {
    this._options = options;
  }

  @Input() config: Object

  public internalConfig: IDropdownConfig = {
    id: 'id',
    label: 'name'
  }

  public isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  private _selectedOption: T;
  private _options: T[];
  private _isDisable: boolean = false;
  constructor() { }

  public ngOnInit(): void {
    if(this.config) {
      for(const key of Object.keys(this.config)) {
        this.internalConfig[key] = this.config[key]
      }
    }
  }

  public onChange = (options: T): void => {};
  public onTouch = (): void => {};

  public set selectedOption(selectedOption: T) {
    this._selectedOption = selectedOption;
  }
  public get selectedOption(): T {
    return this._selectedOption;
  }

  public get options(): T[] {
    return this._options;
  }

  public get isDisable(): boolean {
    return this._isDisable;
  }

  public select(option: T): void {
    this.isOpen$.next(false)
    this.selectedOption = option;
    this.onChange(option[this.internalConfig.id])
  }

  public toggle(): void {
    this.isOpen$.next(!this.isOpen$.value)
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisable = isDisabled;
  }

  public writeValue(value: T): void {
    this.selectedOption = value;
  }

  private set isDisable(isDisable: boolean) {
    this._isDisable = isDisable;
  }
}
